import axios from "axios";

const BASE_URI = "https://rymo-shop-api.onrender.com/api/v1";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.data.accessToken;

console.log(
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .data.accessToken
);

// Public Request
export const publicRequest = axios.create({
  baseURL: BASE_URI,
});

// User Request
export const userRequest = axios.create({
  baseURL: BASE_URI,
  headers: { token: `Bearer ${TOKEN}` },
});
