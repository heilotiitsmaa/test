import { useEffect, useState } from "react"
import MealItem from "./MealItem";

const Meals = () => {
    const [meals, setMeals] = useState([]); // State to hold meals data
    // useEffect to fetch data from backend
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://localhost:3001/meals');
                if (!response.ok) {
                    throw new Error('Failed to fetch meals');
                }
                const mealsData = await response.json();
                console.log(mealsData);
                setMeals(mealsData); // Assuming you have a state to set the meals
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };
        fetchMeals();
    }, []); // Empty dependency array to run once on component mount
    return (
        <ul id="meals">
            {meals.map(meal => (
                <MealItem key={meal.id} meal={meal} />
            ))}

            
        </ul>
    )
}

export default Meals;