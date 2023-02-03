import styles from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";
import React, {useEffect, useState} from "react";
import Card from "../UI/Card";
import {FIREBASE_URL} from "../../../constants";

const AvailableMeals = () => {
    const [mealsList, setMealsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [haveError, setHaveError] = useState();

    useEffect(() => {
        const loadedMeals = [];
        const fetchMeals = async () => {
            // await new Promise(r => setTimeout(r, 2000));
            const response = await fetch(FIREBASE_URL + 'meals.json')
            if (!response.ok) {
                throw new Error(response.statusMessage);
            }
            const data = await response.json();
            for (const key in data) {
                const meal = data[key];
                console.log(meal)
                loadedMeals.push({
                    id: meal.id,
                    name: meal.name,
                    description: meal.description,
                    price: meal.price
                })
            }
            setMealsList(loadedMeals);
            setIsLoading(false);
        };
        fetchMeals().catch(error => {
            setHaveError(error.message);
            setIsLoading(false);
        });

    }, [])

    if (haveError) {
        return (
          <section className={styles.error}>{haveError}</section>
        )
    }
    if (isLoading) {
        return (
          <section className={styles.mealsListLoading}>Meals list is loading...</section>
        )
    }


    const mealItems = mealsList.map(meal => {
        return (
          <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            desc={meal.description}
            price={meal.price}/>
        )
    });

    return (
      <section className={styles['available-meals']}>
          <Card>
              <ul>
                  {mealItems}
              </ul>
          </Card>
      </section>
    )
}

export default AvailableMeals;