import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const  ExpenseItem = (props) => {
	// const [expenseTitle, setTitle] = useState(props.title);
	
	const expenseAmount = props.amount;

	const clickHandler = () => {
		// setTitle('updated')
		console.log('clicked')
	}
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${expenseAmount}</div>
				</div>
				<button onClick={clickHandler}>Change Title</button>
			</Card>
		</li>
	)
}

export default ExpenseItem;
