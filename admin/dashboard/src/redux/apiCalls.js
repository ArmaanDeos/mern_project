import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../utilities/requestMethods";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "./productSlice";

// LOGIN DISPATCH FUNCTION
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// GET PRODUCT DISPATCH FUNCTION
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get("/products");
    console.log(res.data);
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailure());
  }
};
