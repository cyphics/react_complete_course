import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {uiActions} from "../../store/ui-slice";

const CartButton = (props) => {
    const quantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const clickCartHandler = () => {
        dispatch(uiActions.toggle());
    }

    const [bump, setBump] = useState(false);

    useEffect(() => {
        setBump(true);
        const timer = setTimeout(() => {
            setBump(false);
        }, [300]);
        return () => {
            clearTimeout(timer);
        }
    }, [quantity])

    const btnClasses = `${classes.button} ${bump ? classes.bump : ''}`;
    return (
      <button onClick={clickCartHandler} className={btnClasses}>
          <span>My Cart</span>
          <span className={classes.badge}>{quantity}</span>
      </button>
    );
};

export default CartButton;
