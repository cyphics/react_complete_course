import styles from './HeaderCartButton.module.css'
import CartIcon from "./CartIcon";
const HeaderCartButton = () => {
    return (
      <button className={styles.button}>
          <span className={styles.icon}><CartIcon/></span>
          <span>Your Cart</span>
          <span className={styles.amount}>0</span>
      </button>
    )
}

export default HeaderCartButton;