//handle state of the token, in this case instead of using SessionStorage we will use a cookie from next

export const saveToken = (token: string) => {
  document.cookie = `auth-token=${token}; path=/; secure; samesite=strict`;
};

export const getToken = (): string | null => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("auth-token="))
    ?.split("=")[1];
  return cookie || null;
};

export const deleteToken = () => {
  document.cookie = `auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};
