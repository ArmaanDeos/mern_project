import axios from "axios";

const BASE_URI = "https://rymo-shop-api.onrender.com/api/v1";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.data.accessToken;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YmQxMWVjYmRhMWEyN2E2NjRmNTFmZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDQwMzE4NywiZXhwIjoxNzEwNDg5NTg3fQ.4LDOV8U1YGazGzuMZ23kZNb2qZmdiDdzFBT5A8xP_8Q

console
  .log
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  //   .data.accessToken
  ();

// Public Request
export const publicRequest = axios.create({
  baseURL: BASE_URI,
});

// User Request
export const userRequest = axios.create({
  baseURL: BASE_URI,
  headers: { token: `Bearer ${TOKEN}` },
});
