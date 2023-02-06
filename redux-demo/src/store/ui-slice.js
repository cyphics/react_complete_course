import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {cartIsVisible: false, notification: null},
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            const pl = action.payload;
            state.notification = {
                status: pl.status,
                title: pl.title,
                message: pl.message
            }
        }

    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;