import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../utilities/requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.message));
  }
};
