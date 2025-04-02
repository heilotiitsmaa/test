import { useEffect } from "react"

const Meals = () => {
    // useEffect to fetch data from backend
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('http://localhost:3001/meals');
                if (!response.ok) {
                    throw new Error('Failed to fetch meals');
                }
                const data = await response.json();
                console.log(data);
                // setMeals(data); // Assuming you have a state to set the meals
            } catch (error) {
                console.error('Error fetching meals:', error);
            }
        };
        fetchMeals();
    }, []); // Empty dependency array to run once on component mount
    return (
        <ul id="meals">
            { 
                // list of meals
                <h2>CREATE LIST OF MEALS, USING FETCH DATA FROM BACKEND</h2>
            }
        </ul>
    )
}

export default Meals