import axios from "axios";

const BASE_URI = "https://rymo-shop-api.onrender.com/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmQxMWVjYmRhMWEyN2E2NjRmNTFmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzU3OTk5NywiZXhwIjoxNzA3NjY2Mzk3fQ.PKaxG6ggSiFl3GWhv6p-teUrJy4-SWQQ_gLrOvYfkK4";

// Public Request
export const publicRequest = axios.create({
  baseURL: BASE_URI,
});

// User Request
export const userRequest = axios.create({
  baseURL: BASE_URI,
  headers: { token: `Bearer ${TOKEN}` },
});
