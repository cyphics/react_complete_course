import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

const FIREBASE_URL = 'https://react-course-fd4f6-default-rtdb.europe-west1.firebasedatabase.app/'

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(FIREBASE_URL + 'cart.json');
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            return await response.json();
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: e.message,
            }));
        }
    }

}
export const sendCartData = (cartData) => {
    console.log('TEST')
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending', title: 'Sending...', message: 'Sending cart data!',
        }));
        const sendRequest = async () => {
            const response = await fetch(FIREBASE_URL + 'cart.json', {
                method: 'PUT', body: JSON.stringify({
                    items: cartData.items, totalQuantity: cartData.totalQuantity
                })
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
