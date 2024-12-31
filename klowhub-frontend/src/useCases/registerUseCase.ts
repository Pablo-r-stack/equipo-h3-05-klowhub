import { register } from "@/services/authService";

export const registerUser = async(values:{}) => {
      try {
        const data = await register(values);
        return data;
      } catch (error) {
        console.error('Error durante el registro:', error);
        throw error;
      }  
  };