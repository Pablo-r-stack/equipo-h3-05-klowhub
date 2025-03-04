import { getToken } from "@/utils/tokenManaget";

interface moduleServiceProps {
    courseId: number,
    data:{
        title: string
    }
}

export const createModule = async({courseId, data}: moduleServiceProps) =>{
const token = getToken();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/modules/createNew/${courseId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  
    return response.json();
}