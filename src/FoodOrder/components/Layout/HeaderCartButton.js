import styles from './HeaderCartButton.module.css'
import CartIcon from "./CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const {items} = ctx;
    const numOfCartItems = items.reduce((current, item) => {
        return current + item.amount;
    }, 0);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, [300]);

        return () => {
            clearTimeout(timer);
        }
    }, [items])

    return (
      <button onClick={props.onClick} className={btnClasses}>
          <span className={styles.icon}><CartIcon/></span>
          <span>Your Cart</span>
          <span className={styles.amount}>{numOfCartItems}</span>
      </button>
    )
}

export default HeaderCartButton;