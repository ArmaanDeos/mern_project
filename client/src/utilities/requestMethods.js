import axios from "axios";

const BASE_URI = "https://rymo-shop-api.onrender.com/api/v1";
const TOKEN = "";

// Public Request
export const publicRequest = axios.create({
  baseURL: BASE_URI,
});

// User Request
export const userRequest = axios.create({
  baseURL: BASE_URI,
  headers: { token: `Bearer` },
});
