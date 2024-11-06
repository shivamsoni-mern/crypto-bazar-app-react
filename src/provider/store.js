import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authContext/authSlice";
import coinReducer from "./coinContext/coinSlice";
import cartReducer from "./cartContext/cartSlice";
const store = configureStore({
  reducer: {
    auth: authReducer,
    coin: coinReducer,
    cart: cartReducer,
  },
});

export default store;
