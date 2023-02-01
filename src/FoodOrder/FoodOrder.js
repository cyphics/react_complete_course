import Header from "./components/Layout/Header";
import React, {useReducer, useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import {FIREBASE_URL} from "../constants";
import {DUMMY_MEALS} from "./dummy_meals";

const fillDatabase = async () => {

    for (const meal of DUMMY_MEALS) {
        console.log(meal);
        const response = await fetch(FIREBASE_URL + 'meals.json', {
            method: 'POST',
            body: JSON.stringify(meal),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }
}

async function LoadMealsFromDatabase() {
    const loadedMeals = [];
    const response = await fetch(FIREBASE_URL + 'meals.json')
    if (!response.ok) {
        throw new Error(response.statusMessage);
    }
    const data = await response.json();
    for (const key in data) {
        const meal = data[key];
        loadedMeals.push({
            id: meal.id,
            name: meal.name,
            description: meal.description,
            price: meal.price
        })
    }
    return loadedMeals;
}

function FoodOrder() {
    // fillDatabase();
    const loadedMeals = LoadMealsFromDatabase();
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    }
    const hideCartHandler = () => {
        setShowCart(false);
    }

    return (
      <CartProvider>
          {showCart && <Cart
            // orders = selectedOrders
            onClose={hideCartHandler}
          />}

          <Header onShowCart={showCartHandler}/>
          <main>
              <Meals mealsList={loadedMeals}/>
          </main>
      </CartProvider>
    )
}

export default FoodOrder;