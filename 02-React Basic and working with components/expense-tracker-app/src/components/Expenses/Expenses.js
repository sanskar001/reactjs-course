import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card.js"

// Here as we can see that Expenses component build with components inside wrapper components.

// Here Card is custom HTML or React Component is basically make any element or component looks like card container.

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
}

export default Expenses;
