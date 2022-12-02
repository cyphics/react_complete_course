import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        toggleShowForm();
    }

    function toggleShowForm() {
        setShowForm(oldValue => {return !oldValue});
    }

    if (!showForm) {
        return (
          <div className={"new-expense"}>
              <div className={"new-expense__actions"}>
                  <button onClick={toggleShowForm}>Add Expense</button>
              </div>
          </div>
        )
    }

    return (
      <div className={"new-expense"}>
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
      </div>
    );
};

export default NewExpense;