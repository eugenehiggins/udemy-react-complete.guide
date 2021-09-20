import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import {useState} from 'react';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	
	const filterChangeHandler = (year) => {
		setFilteredYear(year);
	}
	
	const filteredExpensesByYear = props.items.filter(item => item.date.getFullYear() == filteredYear);
	
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onFilteredYear={filterChangeHandler} />
				<ExpensesList items={filteredExpensesByYear}/>
			</Card>
		</div>
	)
}

export default Expenses;
