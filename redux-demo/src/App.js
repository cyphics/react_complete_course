import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Notification from "./components/UI/Notification";
import {fetchCartData, sendCartData} from "./store/cart-actions";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector(state => state.ui.cartIsVisible)

    const notification = useSelector(state => state.ui.notification);
    const cart = useSelector(state => state.cart);
    const cartHasChanged = useSelector(state => state.cart.hasChanged);

    useEffect(() => {
        console.log('Fetch cart data')
        isInitial = true;
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (isInitial) {
            isInitial = false;
            return;
        }

        if (cartHasChanged)
            dispatch(sendCartData(cart));

        // This is how you deal with redux and async logic inside component
        //     const sendCartData = async () => {
        //         dispatch(uiActions.showNotification({
        //             status: 'pending', title: 'Sending...', message: 'Sending cart data!',
        //         }));
        //         const response = await fetch(FIREBASE_URL + 'cart.jsn', {
        //             method: 'PUT', body: JSON.stringify(cart)
        //         });
        //
        //         if (!response.ok) {
        //             console.log(response)
        //             throw new Error('Sending cart data failed.');
        //         }
        //
        //         dispatch(uiActions.showNotification({
        //             status: 'success', title: 'Success!', message: 'Sent data successfully!',
        //         }));
        //     }
        //     sendCartData().catch(error => {
        //         dispatch(uiActions.showNotification({
        //             status: 'error', title: 'Error!', message: error.message,
        //         }));
        //     });
    }, [cart, cartHasChanged, dispatch])

    return (<Fragment>
        {notification &&
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />}
        <Layout>
            {showCart && <Cart/>}
            <Products/>
        </Layout></Fragment>);
}

export default App;
