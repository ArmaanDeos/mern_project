import axios from "axios";

const BASE_URI = "https://rymo-shop-api.onrender.com/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmQxMWVjYmRhMWEyN2E2NjRmNTFmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzU0MDY1MiwiZXhwIjoxNzA3NjI3MDUyfQ.Ivibdj3REloEDuWtWyAnF-QL3s8X2Uz7awjj1WBMA7s";

// Public Request
export const publicRequest = axios.create({
  baseURL: BASE_URI,
});

// User Request
export const userRequest = axios.create({
  baseURL: BASE_URI,
  headers: { token: `Bearer ${TOKEN}` },
});
