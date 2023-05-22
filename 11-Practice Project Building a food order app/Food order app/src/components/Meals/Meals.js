import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Card from "../UI/Card";

const Meals = (props) => {
  return (
    <Card>
      <MealsSummary />
      <AvailableMeals />
    </Card>
  );
};

export default Meals;
