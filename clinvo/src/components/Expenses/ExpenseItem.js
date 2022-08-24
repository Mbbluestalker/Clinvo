import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card'
import { useState } from 'react'

const ExpenseItem = ( {title, amount, date}) => {
  const [title1, setTitle1] = useState(title)

  const handleClick = () => {
    setTitle1("hello")
  }
    
  return (
    <Card className="expense-item">
        <ExpenseDate date={date} />
        
        <div className="expense-item__description">
            <h2>{title1}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={handleClick}>change title</button>
    </Card>
  )
} 

export default ExpenseItem