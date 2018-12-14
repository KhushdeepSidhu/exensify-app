import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import selectedExpenses from '../selectors/expenses'
import getExpensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = ( props ) => {
    const expenseCount = props.expenses.length
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral ( getExpensesTotal ( props.expenses ) / 100 ).format ('$0,0.00')
    return (
        <div>
            <p>
                { `Viewing ${ expenseCount } ${ expenseWord } totalling ${ formattedExpensesTotal }` }
            </p>
        </div>
    )
}


const mapStatetoProps = ( state ) => {
    return {
        expenses: selectedExpenses ( state.expenses, state.filters )
    }
}

export default connect ( mapStatetoProps ) ( ExpenseSummary )
