'use client'

import { Course } from "@/models";
import { createContext, useContext, useEffect, useState } from "react"

interface Category {
    id: number;
    name: string;
}

interface PortalContextType {
    categories: Category[];
    courses: Course[];
}

const PortalContext = createContext<PortalContextType>({
    categories: [],
    courses: []
});

interface PortalProviderProps {
    children: React.ReactNode;
}

export const PortalProvider = ({ children }: PortalProviderProps) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`);
                if (response.ok) {
                    const data: Category[] = await response.json();
                    setCategories(data);
                } else {
                    console.error("Error al obtener categorías");
                }
            } catch (error) {
                console.error("Error en la solicitud:", error);
            }
        };
        const getCourses = async () =>{
            try{
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses`)
                if(response.ok){
                    const data: Course[] = await response.json();
                    setCourses(data);
                }else{
                    console.error("error al obtener la lsita de cursos");
                }
            }catch(error){
                console.error("Error al obtener cursos", error)
            }
        }

        getCategories();
        getCourses();
    }, []);

    return (
        <PortalContext.Provider value={{ categories, courses }}>
            {children}
        </PortalContext.Provider>
    );
};

export const usePortal = ()=> useContext(PortalContext);
