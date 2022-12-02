import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2020');
    const yearSelectedHandler = (newYear) => {
        setSelectedYear(newYear);
    }
    const filteredList = props.expensesList.filter(expense => expense.date.getFullYear().toString() === selectedYear)

    return (
      <div>
          <li>
              <Card className={"expenses"}>
                  <ExpensesFilter selected={selectedYear} onYearChanged={yearSelectedHandler}></ExpensesFilter>
                  <ExpensesList expensesList={filteredList}/>
              </Card>
          </li>
      </div>
    )
}

export default Expenses;