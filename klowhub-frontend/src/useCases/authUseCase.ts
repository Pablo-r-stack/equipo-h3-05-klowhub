import { useAuth } from "@/context/AuthContext";
import { login as loginApi } from "@/services/authService";
import { saveToken } from "@/utils/tokenManaget";


export const useLogin = ()=> {

    const {login: loginContext} = useAuth();

    const login = async(values: any) =>{
        try {
            const{token} = await loginApi(values);
            saveToken(token);
            loginContext(token);
            return token;
        } catch (error) {
            console.error("error durante el login", error);
            throw error;
        }
    }
    return {login};
}