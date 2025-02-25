'use client'

import { createContext, useContext, useEffect, useState } from "react"

interface Category {
    id: number;
    name: string;
}

interface PortalContextType {
    categories: Category[];
}

const PortalContext = createContext<PortalContextType>({
    categories: [],
});

interface PortalProviderProps {
    children: React.ReactNode;
}

export const PortalProvider = ({ children }: PortalProviderProps) => {
    const [categories, setCategories] = useState<Category[]>([]);

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

        getCategories();
    }, []);

    return (
        <PortalContext.Provider value={{ categories }}>
            {children}
        </PortalContext.Provider>
    );
};

export const usePortal = ()=> useContext(PortalContext);
