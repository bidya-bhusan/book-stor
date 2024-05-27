import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BooksCon } from "../interface/interface";

interface CartState {
    items: BooksCon[];
    isCartOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isCartOpen: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<BooksCon>) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action: PayloadAction<BooksCon>) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        toggleCart: (state) => {
            state.isCartOpen = !state.isCartOpen;
        }
    }
});

export const { addItem, removeItem, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
