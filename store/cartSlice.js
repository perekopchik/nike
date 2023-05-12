import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartItems",
    initialState: {
        cartItems: [],
        favoriteItems: []
    },
    reducers: {
        addToCart: {
            reducer: (state, action) => {
                state.cartItems.push(action.payload);
            },
        },
        addToFavorite: {
            reducer: (state, action) => {
                state.favoriteItems.push(action.payload);
            },
        },
        removeFromCart: {
            reducer: (state, action) => {
                state.cartItems = state.cartItems.filter(
                    (p) => p.id !== action.payload.id
                )
            }
        },
        clearCart: {
            reducer: (state,action) => {
                state.cartItems = []
            }
        }
    },
});

export const {addToCart, addToFavorite,removeFromCart,clearCart} = cartSlice.actions;

export default cartSlice.reducer;