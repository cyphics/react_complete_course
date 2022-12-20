import Header from "./components/Layout/Header";
import React, {useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function FoodOrder () {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    }
    const hideCartHandler = () => {
        setShowCart(false);
    }

    return(
      <React.Fragment>
          {showCart && <Cart
            // orders = selectedOrders
            onClose={hideCartHandler}
          />}

          <Header onShowCart={showCartHandler}/>
          <main>
              <Meals/>
          </main>
      </React.Fragment>
    )
}

export default FoodOrder;