import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.alquran.cloud/v1",
  timeout: Infinity,
});
