import styles from './HeaderCartButton.module.css'
import CartIcon from "./CartIcon";
import {Fragment, useContext} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const numOfCartItems = ctx.items.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    return (
      <Fragment>
          <button onClick={props.onClick} className={styles.button}>
              <span className={styles.icon}><CartIcon/></span>
              <span>Your Cart</span>
              <span className={styles.amount}>{numOfCartItems}</span>
          </button>
      </Fragment>
    )
}

export default HeaderCartButton;