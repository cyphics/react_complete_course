import {createSlice} from "@reduxjs/toolkit";
import {uiActions} from "./ui-slice";

const FIREBASE_URL = 'https://react-course-fd4f6-default-rtdb.europe-west1.firebasedatabase.app/'

const cartSlice = createSlice({
    name: 'cart', initialState: {
        items: [], totalQuantity: 0
    }, reducers: {
        addItem(state, action) {
            const newItem = action.payload;

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

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending', title: 'Sending...', message: 'Sending cart data!',
        }));
        const sendRequest = async () => {
            const response = await fetch(FIREBASE_URL + 'cart.json', {
                method: 'PUT', body: JSON.stringify(cartData)
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }

        }
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success', title: 'Success!', message: 'Sent data successfully!',
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: error.message,
            }));
        }

    }
}
export const cartActions = cartSlice.actions;
export default cartSlice;