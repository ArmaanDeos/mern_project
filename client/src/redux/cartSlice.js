// Importing the createSlice function from the Redux Toolkit package
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the cart slice
const initialCartState = {
  products: [], // Array to store products
  quantity: 0, // Total quantity of products in the cart
  total: 0, // Total cost of products in the cart
};

// Creating a slice of the Redux store called "cartSlice"
const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState: initialCartState, // Initial state for the slice
  reducers: {
    // Reducer function to handle adding a product to the cart
    addProduct: (state, action) => {
      // Incrementing the quantity of products in the cart
      state.quantity += 1;
      // Pushing the new product into the products array
      state.products.push(action.payload); // Assuming payload contains a product object
      // Adding the price of the product to the total cost
      state.total += action.payload.price * action.payload.quantity; // Assuming payload contains the price of the product
    },
  },
});

// Exporting the addProduct action creator
export const { addProduct } = cartSlice.actions;
// Exporting the cartSlice reducer
export default cartSlice.reducer;
