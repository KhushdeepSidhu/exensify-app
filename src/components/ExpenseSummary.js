import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectedExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'
import { Link } from 'react-router-dom'

export const ExpenseSummary = ( props ) => {
    const expenseCount = props.expenses.length
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral ( getExpensesTotal ( props.expenses ) / 100 ).format ('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{ expenseCount }</span> { expenseWord } totalling <span>{ formattedExpensesTotal }</span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}


const mapStatetoProps = ( state ) => {
    return {
        expenses: selectedExpenses ( state.expenses, state.filters )
    }
}

export default connect ( mapStatetoProps ) ( ExpenseSummary )
