import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest, userRequest } from "../utilities/requestMethods";
import {
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
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

// DELETE PRODUCT DISPATCH FUNCTION

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};
