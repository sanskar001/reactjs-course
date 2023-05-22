// This is ExpenseDate separate component
import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.myDate.toLocaleString("en-US", { month: "long" });
  const year = props.myDate.toLocaleString("en-US", { year: "numeric" });
  const day = props.myDate.toLocaleString("en-US", { day: "numeric" });

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;


