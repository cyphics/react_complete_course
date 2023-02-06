import Card from '../UI/Card';
import classes from './Cart.module.css';
import {useSelector} from "react-redux";
import CartItem from "./CartItem";

const Cart = (props) => {
    const items = useSelector(state => state.cart.items)
    const cartContent = () => {
        if (items.length === 0) {
            return <p>Your cart is empty</p>
        } else {
            return (
              <ul>
                  {items
                    .filter(item => item.quantity > 0)
                    .map(item => {
                        return (
                          <CartItem
                            key={item.id}
                            item={item}/>
                        )
                    })}
              </ul>
            )
        }
    }
    return (
      <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          {cartContent()}
      </Card>
    );
};

export default Cart;
