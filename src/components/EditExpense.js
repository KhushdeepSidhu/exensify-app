import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpense extends React.Component {

    onSubmit = ( expense ) => {
        this.props.startEditExpense ( expense, this.props.expense.id ) 
        this.props.history.push ( '/' )
    }

    onRemove = () => {
        this.props.startRemoveExpense ( this.props.expense.id  )
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
    startEditExpense: ( expense, id ) => dispatch ( startEditExpense ( expense, id ) ),
    startRemoveExpense: ( id ) => dispatch ( startRemoveExpense ( id ) )
} )

export default connect ( mapStateToProps, mapDispatchToProps ) ( EditExpense )