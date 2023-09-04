import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Items {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: number;
  counter: number;
}

interface CartSlice {
  items: Items[];
  openCart: boolean;
}

const initialState: CartSlice = {
  items: [],
  openCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Items>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem ? findItem.counter++ : state.items.push({ ...action.payload });
      state.openCart = true;
    },
    closeCart(state,action:PayloadAction<boolean>) {
      state.openCart = action.payload;
    }
  },
});

export const { addToCart,closeCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer;
