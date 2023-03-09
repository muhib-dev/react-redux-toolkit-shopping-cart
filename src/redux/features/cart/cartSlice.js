import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (!existingProduct) {
        state.cart = [product, ...state.cart];
      } else {
        existingProduct.quantity++;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload.id;
      const product = state.cart.find((item) => item.id === id);

      product.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload.id;
      const product = state.cart.find((item) => item.id === id);

      if (product.quantity > 1) {
        product.quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
