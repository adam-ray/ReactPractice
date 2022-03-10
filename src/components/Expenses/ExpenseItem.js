import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title)
  console.log('ExpenseItem evaluated by react')
  
  const clickHandler = () => {
    setTitle('Updated Title');
    console.log(title)
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <button onClick={clickHandler}>{title}</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;