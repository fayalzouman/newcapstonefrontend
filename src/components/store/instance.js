import axios from "axios";

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

// http://192.168.100.53:8000/
