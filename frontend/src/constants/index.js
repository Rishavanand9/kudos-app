export const currentUser = JSON.parse(sessionStorage.getItem("userDetails") || "{}")

export const AUTH_TOKEN = `Token ${currentUser?.token}`;
export const API_HEADERS = {
    Accept: "application/json",
    Authorization: AUTH_TOKEN,
    "Content-Type": "application/json",
  };

export const BASE_URL = 'http://127.0.0.1:8000/'

export const LOGIN_URL = BASE_URL + `login/`
export const SEARCH_USER_URL = BASE_URL + `users/`