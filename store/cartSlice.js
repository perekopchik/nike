import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartItems",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartItems = action.payload
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;