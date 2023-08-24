import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data";

export const store = configureStore({
  reducer: {
    data: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
