import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpense extends React.Component {

    onSubmit = ( expense ) => {
        this.props.editExpense ( expense, this.props.expense.id ) 
        this.props.history.push ( '/' )
    }

    onRemove = () => {
        this.props.removeExpense ( this.props.expense.id  )
        this.props.history.push ( '/' )
    }

    render () {
        return (
            <div>
                <ExpenseForm
                    expense={ this.props.expense } 
                    onSubmit = { this.onSubmit }
                /> 
                <button
                    onClick = { this.onRemove }>
                    Remove
                </button>
            </div>
        )
    }

}

const mapStateToProps = ( state, props ) => {
    return {
        expense: state.expenses.find ( ( expense ) => expense.id === props.match.params.id )
    }
}

const mapDispatchToProps = ( dispatch ) => ( {
    editExpense: ( expense, id ) => dispatch ( editExpense ( expense, id ) ),
    removeExpense: ( id ) => dispatch ( removeExpense ( id ) )
} )

export default connect ( mapStateToProps, mapDispatchToProps ) ( EditExpense )