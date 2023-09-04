import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data";
import localesSlice from "./slices/localesSlice";
import cartSlice from "./slices/cart";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    locales: localesSlice,
    cart: cartSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
