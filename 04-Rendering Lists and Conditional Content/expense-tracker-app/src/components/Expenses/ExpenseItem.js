import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../Expenses/ExpenseDate.js";
import Card from "../UI/Card.js";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate myDate={props.myDate}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.myTitle}</h2>
          <div className="expense-item__price">${props.myAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
