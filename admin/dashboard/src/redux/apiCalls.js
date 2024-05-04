import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest, userRequest } from "../utilities/requestMethods";
import {
  addProductFailure,
  addProductStart,
  addProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from "./productSlice";

// LOGIN DISPATCH FUNCTION
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    // console.log(res.data);
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
    // console.log(res);
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailure());
  }
};

// DELETE PRODUCT DISPATCH FUNCTION

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res.data));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

// UPDATE PRODUCT DISPATCH FUNCTION

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    dispatch(updateProductSuccess(id, product));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

// ADD PRODUCT DISPATCH FUNCTION

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post("/products", product);
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
