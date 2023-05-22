import React from "react";

import "./ExpensesFilter.css";

// As we can see here that we are listening event for select input but we are using useState() function that because we do not change state this ExpenseFilter component, we need to change state of Expenses component.

const ExpensesFilter = (props) => {
  function dropdownChangeHandler(event) {
    // console.log(event.target.value);
    props.onFilterChange(event.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value = {props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
