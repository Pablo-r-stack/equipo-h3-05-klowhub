// Las peticiones a la API deberían estar en la capa de datos. Esto implica que todo acceso a datos externos, como APIs REST o GraphQL, se encapsula en servicios independientes.
export const login = async (values: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );
  if(!response.ok){
    throw new Error('Ocurrio un error durante el login');
  }
  const data = await response.json();
  return data;
};

export const register = async (values: {}) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );
  if(!response.ok){
    throw new Error(' Error al registrarse')
  }
  const data = await response.json();
  return data; 
};
