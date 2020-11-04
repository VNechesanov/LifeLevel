import { saveAuthTokenToLocalStorage } from "../store";

type UserInfo = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

export const registration = (
  name: string,
  surname: string,
  email: string,
  password: string
) => {
  const userInfo: UserInfo = {
    name,
    surname,
    email,
    password,
  };

  fetch("/registration", {
    method: "POST",
    cache: "no-cache",
    headers: {
      content_type: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((response) => {
      return response.json();
    })
    .then((token) => {
      saveAuthTokenToLocalStorage(token);
    });
};
