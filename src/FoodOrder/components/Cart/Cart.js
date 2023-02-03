import styles from './Cart.module.css'
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import {Fragment, useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import OrderForm from "./OrderForm";
import {FIREBASE_URL} from "../../../constants";

const Cart = props => {
    const [checkout, setCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemAddHandler = (item) => {
        cartContext.addItem({...item, amount: 1});
    };

    const cartItemRemoveHandler = (id) => {
        cartContext.removeItem(id);
    };

    const orderHandler = () => {
        setCheckout(true);
    }

    const submitOrderHandler = (userData) => {
        setIsSubmitting(true);
        fetch(FIREBASE_URL + 'orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartContext.items
            })
        })
        setIsSubmitting(false);
        setDidSubmit(true);
        cartContext.clearCart();
    };

    const cartItems =
      <ul className={styles["cart-items"]}>
          {cartContext.items.map(item => (
            <CartItem
              key={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
      </ul>

    const cartModalContent =
      <Fragment>
          {cartItems}
          <div className={styles.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
          </div>
          {checkout && <OrderForm onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
          {!checkout &&
            <div className={styles.actions}>
                <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
                {hasItems && !checkout && <button onClick={orderHandler} className={styles.button}>Order</button>}
                {checkout && <button onClick={orderHandler} className={styles.button}>Confirm</button>}
            </div>}
      </Fragment>

    const submittingModalContent = <p>Sending order data...</p>
    const didSubmitModalContent =
      <Fragment>
          <div className={styles.actions}>
              <p>Successfully sent the order!</p>
              <button className={styles.button} onClick={props.onClose}>Close</button>
          </div>      </Fragment>

    return (
      <Modal onClick={props.onClose}>
          {!isSubmitting && !didSubmit && cartModalContent}
          {isSubmitting && submittingModalContent}
          {didSubmit && didSubmitModalContent}
      </Modal>
    );
}

export default Cart;
