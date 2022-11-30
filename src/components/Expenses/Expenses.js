import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const yearSelectedHandler = (newYear) => {
    setSelectedYear(newYear);
    console.log(newYear);
  }
  return (
    <div>
      <Card className={"expenses"}>
        <ExpensesFilter selected={selectedYear} onYearChanged={yearSelectedHandler}></ExpensesFilter>
        <ExpenseItem title={props.expensesList[0].title} amount={props.expensesList[0].amount}
                     date={props.expensesList[0].date}></ExpenseItem>
        <ExpenseItem title={props.expensesList[1].title} amount={props.expensesList[1].amount}
                     date={props.expensesList[1].date}></ExpenseItem>
        <ExpenseItem title={props.expensesList[2].title} amount={props.expensesList[2].amount}
                     date={props.expensesList[2].date}></ExpenseItem>
        <ExpenseItem title={props.expensesList[3].title} amount={props.expensesList[3].amount}
                     date={props.expensesList[3].date}></ExpenseItem>
      </Card>
    </div>
)
}

export default Expenses;