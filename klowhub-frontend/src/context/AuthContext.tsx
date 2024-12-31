'use client';
import { deleteToken, getToken, saveToken } from '@/utils/tokenManaget';
import { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

interface AuthContextType{
    user: User | null,
    login: (token: string) => void;
    logOut: () => void;
}

interface User{
    id: string,
    email: string,
    name: string
}
const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logOut: () => {}
});

interface AuthProviderProps{
    children: React.ReactNode
    }

export const AuthProvider = ({children}: AuthProviderProps)=>{
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const token = getToken();
      if (token) {
          console.log('token atrapado')
        const decodedUser = jwtDecode<User>(token);
        setUser(decodedUser);
    }
    }, []);

    const login = (token: string)=>{
        saveToken(token);
        const decodedUser = jwtDecode<User>(token);
        console.log('sesion iniciada', decodedUser);
        setUser(decodedUser);
    }

    const logOut = () =>{ 
        deleteToken();
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{user, login, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = ()=> useContext(AuthContext);