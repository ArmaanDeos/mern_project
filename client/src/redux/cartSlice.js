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

    removeProduct: (state, action) => {
      // Finding the index of the product to be removed
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      // If the product is found
      if (index !== -1) {
        // Decrementing the quantity of products in the cart
        state.quantity -= state.products[index].quantity;
        // Subtracting the price of the product from the total cost
        state.total -=
          state.products[index].price * state.products[index].quantity;
        // Removing the product from the products array
        state.products.splice(index, 1);
      }
    },
  },
});

// Exporting the addProduct action creator
export const { addProduct, removeProduct } = cartSlice.actions;
// Exporting the cartSlice reducer
export default cartSlice.reducer;
