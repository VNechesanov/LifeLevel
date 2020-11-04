export const saveAuthTokenToLocalStorage = (token: any) => {
  localStorage.setItem("auth", JSON.stringify(token));
};

export const getAuthTokenfromLocalStorage = (): string => {
  let token: string = localStorage.getItem("auth") || "";

  return token;
};

export const removeAuthTokenFromLocalStorage = () => {
  localStorage.removeItem("auth");
};
