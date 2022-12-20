import styles from './CartItem.module.css'
const CartItem = props => {
    const price = `€${props.price.toFixed(2)}`
    return (
      <div className={styles.item}>
          <div>
              <h3>{props.name}</h3>
              <div className={styles.quantity}>
                  <div className={styles.price}>{price}</div>
                  <div className={styles.amount}>x {props.amount}</div>
              </div>
          </div>
          <div className={styles.actions}>
              <button>-</button>
              <button>+</button>
          </div>
      </div>
    )
};

export default CartItem;