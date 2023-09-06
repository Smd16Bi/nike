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
  cartTotal: number
}

const initialState: CartSlice = {
  items: [],
  openCart: false,
  cartTotal: 0
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
    closeCart(state, action: PayloadAction<boolean>) {
      state.openCart = action.payload;
    },
    changeQuntity(state, action) {
      const { id, typeButton } = action.payload;
      const findItem = state.items.find((obj) => obj.id === id);
      switch (typeButton) {
        case "plus":
          if (findItem) findItem.counter++;
          break;
        case "minus":
          if (findItem) {
            if (findItem?.counter === 1) {
              console.log(true);
              
              state.items = state.items.filter( el => el.id !== id)
            }
            findItem.counter--;
          }

          break;

        default:
          break;
      }
    },
    getCartTotal(state) {
      state.cartTotal = state.items.reduce((accumulator, item) => accumulator + item.price * item.counter, 0);
    }
  },
});

export const { addToCart, closeCart, changeQuntity,getCartTotal } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;

