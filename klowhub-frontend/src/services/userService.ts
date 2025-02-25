import { getToken } from "@/utils/tokenManaget"

// For this example we'll use not httponly cookies, is a better practice to handle cookies directly from the server.
export const getUserCourses = async () => {
    const token = getToken();
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/courses/my-courses`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
  
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  
    return response.json();
  };