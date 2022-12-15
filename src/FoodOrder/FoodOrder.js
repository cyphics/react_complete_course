import Header from "./components/Layout/Header";
import React from "react";
import Meals from "./components/Meals/Meals";


function FoodOrder () {
    return(
      <React.Fragment>
          <Header/>
          <main>
              <Meals/>
          </main>
      </React.Fragment>
    )
}

export default FoodOrder;