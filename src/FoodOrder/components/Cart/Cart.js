import styles from './Cart.module.css'
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const Cart = props => {
    const cartContext = useContext(CartContext);
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;
    const cartItems =
      <ul className={styles["cart-items"]}>
          {cartContext.items.map(item => {
              return (<CartItem key={item.id} name={item.name} price={item.price} amount={item.amount}/>)
          })}
      </ul>

    return (
      <Modal onClick={props.onClose}>
          {cartItems}
          <div className={styles.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
          </div>
          <div className={styles.actions}>
              <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
              {hasItems && <button className={styles.button}>Order</button>}
          </div>
      </Modal>
    );
}

export default Cart;
