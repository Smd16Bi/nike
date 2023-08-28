import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/data";
import localesSlice from "./slices/localesSlice";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    locales: localesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
