import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";

function Expenses(props) {
    return (
        <Card className={"expenses"}>
            <ExpenseItem title={props.expensesList[0].title} amount={props.expensesList[0].amount} date={props.expensesList[0].date}></ExpenseItem>
            <ExpenseItem title={props.expensesList[1].title} amount={props.expensesList[1].amount} date={props.expensesList[1].date}></ExpenseItem>
            <ExpenseItem title={props.expensesList[2].title} amount={props.expensesList[2].amount} date={props.expensesList[2].date}></ExpenseItem>
            <ExpenseItem title={props.expensesList[3].title} amount={props.expensesList[3].amount} date={props.expensesList[3].date}></ExpenseItem>
        </Card>
    )
}

export default Expenses;