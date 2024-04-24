import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://myanmar-posital-code-api.vercel.app/api/data/myanmar",
});
