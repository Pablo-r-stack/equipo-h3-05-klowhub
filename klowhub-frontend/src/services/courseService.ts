import { getToken } from "@/utils/tokenManaget"
interface Course {
  title: string;
  description: string;
  price: number;
  categoryId: number;
  thumbnail: string;
}
export const createNewCourse = async (course:Course) => {
    const token = getToken();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(course),
    });
  
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  
    return response.json();
  };