import './Expenses.css'
import { Card } from "../UI/Card";
import ExepenseItem from './ExpenseItem'

export function Expense(props) {
    return (
        <Card className='expenses'>
            {props.items.map(expense => (
            <ExepenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
            ))}
        </Card>
    );
}
