import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            const item = state.products.find(
                (item) => item.id === action.payload.id
            );

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        removeItemFromCart: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );
        },
        resetCart: (state) => {
            state.products = [];
        },
    },
});

export const { addItemToCart, removeItemFromCart, resetCart } =
    cartSlice.actions;

export default cartSlice.reducer;
