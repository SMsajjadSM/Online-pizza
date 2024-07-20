import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quentity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.pizzaId
      );
    },
    increaseItemQuentity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quentity++;
      item.totalPrice = item.quentity * item.unitPrice;
    },
    decreaseItemQuentity(state, action) {
      const item = state.cart.find((item) =>   item.pizzaId === action.payload);
      item.quentity--;
      item.totalPrice = item.quentity * item.unitPrice;
    },
    clearItem(state) {
        state.cart = [];
    },
  },
});
export const {clearItem,decreaseItemQuentity,increaseItemQuentity,deleteItem,addItem} = createSlice.actions()
export default  cartSlice.reducer;
