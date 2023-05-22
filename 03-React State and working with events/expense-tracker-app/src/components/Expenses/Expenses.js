import React, { useState } from "react";

import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpensesFilter.js";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onFilterChange={filterChangeHandler} />
      <ExpenseItem
        myTitle={props.items[0].title}
        myAmount={props.items[0].amount}
        myDate={props.items[0].date}
      />
      <ExpenseItem
        myTitle={props.items[1].title}
        myAmount={props.items[1].amount}
        myDate={props.items[1].date}
      />
      <ExpenseItem
        myTitle={props.items[2].title}
        myAmount={props.items[2].amount}
        myDate={props.items[2].date}
      />
      <ExpenseItem
        myTitle={props.items[3].title}
        myAmount={props.items[3].amount}
        myDate={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
