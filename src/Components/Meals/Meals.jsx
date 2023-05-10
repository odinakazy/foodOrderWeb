import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealSummary from "./MealSummary";
function meals() {
  return (
    <>
      <MealSummary />
      <AvailableMeals />
    </>
  );
}

export default meals;
