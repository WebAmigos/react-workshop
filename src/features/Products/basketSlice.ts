import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { Product } from "../../types/Product";

// Define a type for the slice state
export interface BasketState {
  products: Product[];
}

// Define the initial state using that type
const initialState: BasketState = {
  products: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    remove: (state, action: PayloadAction<Product["id"]>) => {
      state.products.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const { add, remove } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.basket.products.length;

export default basketSlice.reducer;
