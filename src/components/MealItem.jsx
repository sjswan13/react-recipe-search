import React from "react";

const MealItem = ({ meal, selectMeal }) => {
  return (
    <div className="meal" onClick={() => selectMeal(meal.idMeal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className="meal-info">
        <h3>{meal.strMeal}</h3>
      </div>
    </div>
  );
};

export default MealItem;