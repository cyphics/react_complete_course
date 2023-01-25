import Header from "./components/Layout/Header";
import React, {useReducer, useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";


function FoodOrder () {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    }
    const hideCartHandler = () => {
        setShowCart(false);
    }

    return(
      <CartProvider>
          {showCart && <Cart
            // orders = selectedOrders
            onClose={hideCartHandler}
          />}

          <Header onShowCart={showCartHandler}/>
          <main>
              <Meals/>
          </main>
      </CartProvider>
    )
}

export default FoodOrder;