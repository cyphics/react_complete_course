import styles from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";
import React from "react";
import {DUMMY_MEALS} from "../../dummy_meals";
import Card from "../UI/Card";
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
        return(
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            desc={meal.description}
            price={meal.price}/>
        )
    });

    return(
      <section className={styles['available-meals']}>
          <Card>
              <ul>
                  {mealsList}
              </ul>
          </Card>
      </section>
    )
}

export default AvailableMeals;