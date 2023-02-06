import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart', initialState: {
        items: [],
        totalQuantity: 0,
        hasChanged: false
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items || [];
        },
        addItem(state, action) {
            const newItem = action.payload;
            state.hasChanged = true;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id, title: newItem.title, price: newItem.price, quantity: 1, totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price;
            }
        }, removeItem(state, action) {
            state.totalQuantity--;
            state.hasChanged = true;
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;