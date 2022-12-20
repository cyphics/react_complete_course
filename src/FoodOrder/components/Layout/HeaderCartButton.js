import styles from './HeaderCartButton.module.css'
import CartIcon from "./CartIcon";
import {Fragment} from "react";

const HeaderCartButton = (props) => {

    return (
      <Fragment>
          <button onClick={props.onClick} className={styles.button}>
              <span className={styles.icon}><CartIcon/></span>
              <span>Your Cart</span>
              <span className={styles.amount}>0</span>
          </button>
      </Fragment>
    )
}

export default HeaderCartButton;