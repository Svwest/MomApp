import axios from "axios";
export const server = axios.create({
  baseURL: "http://192.168.1.221:3000",
  timeout: 2000,
});
