'use client';
import { deleteToken, getToken, saveToken } from '@/utils/tokenManaget';
import { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { Course } from '@/models';
import { getUserCourses } from '@/services/userService';

interface AuthContextType{
    user: User | null;
    courses: Course[];
    login: (token: string) => void;
    logOut: () => void;
    fetchCourses: () => Promise<void>;
}

interface User{
    id: string,
    email: string,
    name: string,
    avatarUrl: string
}
const AuthContext = createContext<AuthContextType>({
    user: null,
    courses: [],
    login: () => {},
    logOut: () => {},
    fetchCourses: async () => {}
});

interface AuthProviderProps{
    children: React.ReactNode
    }

export const AuthProvider = ({children}: AuthProviderProps)=>{
    const [user, setUser] = useState<User | null>(null);
    const [courses, setCourses] = useState<Course[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const token = getToken();
            if (token) {
                console.log('Token atrapado:', token);
                const decodedUser = jwtDecode<User>(token);
                setUser(decodedUser);
            }
        };
        fetchData();
    }, []);
    
    useEffect(() => {
        if (user) {
            console.log('Usuario actualizado, ejecutando fetchCourses...');
            fetchCourses();
        }
    }, [user]);
      

    const login = (token: string)=>{
        saveToken(token);
        const decodedUser = jwtDecode<User>(token);
        console.log('sesion iniciada', decodedUser);
        setUser(decodedUser);
        fetchCourses();
    }

    const logOut = () =>{ 
        deleteToken();
        setUser(null);
        setCourses([]);
    }

    const fetchCourses = async () => {
        try {
            console.log('Ejecutando fetchCourses...');
            const coursesList = await getUserCourses();
            console.log('Cursos recibidos:', coursesList);
    
            if (coursesList && coursesList.length > 0) {
                setCourses(coursesList);
            } else {
                setCourses([]); // Si no hay cursos, aseguramos que el estado se limpie
            }
        } catch (error) {
            console.error('Error al obtener los cursos:', error);
        }
    };

    return(
        <AuthContext.Provider value={{user, courses, login, logOut, fetchCourses}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=> useContext(AuthContext);