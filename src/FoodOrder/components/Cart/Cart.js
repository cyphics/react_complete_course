import styles from './Cart.module.css'
import CartItem from "./CartItem";
import Modal from "../UI/Modal";

const Cart = props => {
    const orders = <ul className={styles["cart-items"]}>
        {[
            {key: 'c1', id: 'c1', name: 'Sushi', price: 22.99, amount: 1},
            {key: 'c2', id: 'c2', name: 'Schnitzel', price: 12.99, amount: 4}]
          .map(order => {
              return (<CartItem key={order.id} name={order.name} price={order.price} amount={order.amount}/>)
          })
        }
    </ul>
    return (
      <Modal onClick={props.onClose}>
          {orders}
          <div className={styles.total}>
              <span>Total Amount</span>
              <span>43.35</span>
          </div>
          <div className={styles.actions}>
              <button onClick={props.onClose} className={styles['button--alt']}>Close</button>
              <button className={styles.button}>Order</button>
          </div>
      </Modal>
    );
}

export default Cart;
