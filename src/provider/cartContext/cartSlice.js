import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },

  reducers: {
    add: (curState, action) => {
      return {
        ...curState,
        cartItems: [action.payload, ...curState.cartItems],
      };
    },
    remove: (curState, action) => {
      return {
        ...curState,
        cartItems: curState.cartItems.filter(
          (item) => item.id !== action.payload
        ),
      };
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
