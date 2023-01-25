import styles from './CartItem.module.css'
const CartItem = props => {
    const price = `€${props.price.toFixed(2)}`
    return (
      <div className={styles.cartItem}>
          <div>
              <h2>{props.name}</h2>
              <div className={styles.summary}>
                  <div className={styles.price}>{price}</div>
                  <div className={styles.amount}>x {props.amount}</div>
              </div>
          </div>
          <div className={styles.actions}>
              <button onClick={props.onRemove}>-</button>
              <button onClick={props.add}>+</button>
          </div>
      </div>
    )
};

export default CartItem;