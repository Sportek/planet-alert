import axios, { AxiosError, AxiosResponse } from "axios";


console.log(process.env.NEXT_PUBLIC_API_URL)
export const axiosNoReplaceInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
 * On gère tout ce qui peut être gérer généralement sur les requêtes
 * On gère les erreurs, l
 */
axiosInstance.interceptors.response.use(
  // Succès
  (response: AxiosResponse) => {
    return response;
  },
  // Erreur
  (error: AxiosError<{ detail: string }>) => {
    let message = "An error occurred";

    if (error.response) {
      message = error.response.data?.detail ?? `Error ${error.response.status}`;

      switch (error.response.status) {
        case 401:
          message = "Unauthorized";
          break;
        case 403:
          message = "Access denied";
          break;
        case 404:
          message = "Resource not found";
          break;
        case 500:
          message = "Server error";
          break;
        case 502:
          message = "Bad Gateway";
          break;
      }
    } else if (error.request) {
      message = "We failed to reach the server";
    }
    return Promise.reject(new Error(message));
  },
);

export default axiosInstance;