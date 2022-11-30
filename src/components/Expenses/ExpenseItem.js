import {useState} from "react";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated title");
    setPrice(22.2);
    console.log("Clicked!");
  }
  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={props.date}/>
      <div className={"expense-item__description"}>
        <h2>{title}</h2>
        <div className={"expense-item__price"}>{price}</div>
      </div>
      <button onClick={clickHandler}>Change me</button>
    </Card>
  );
}

export default ExpenseItem;