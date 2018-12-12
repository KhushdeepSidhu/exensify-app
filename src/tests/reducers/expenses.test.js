import expensesReducers from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test ( 'Should set default state', () => {
    const state = expensesReducers ( undefined, { type: '@@INIT' } )
    expect ( state ).toEqual ( [] )
} )

test ( 'Should remove expense with valid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: expenses[1].id
        }
    }
    const state = expensesReducers ( expenses, action )
    expect( state ).toEqual ( [ expenses[0], expenses[2] ] )
} )

test ( 'Should not remove expense when id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '-1'
        }
    }
    const state = expensesReducers ( expenses, action )
    expect( state ).toEqual ( expenses )
} )

test ( 'Should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '6',
            description: 'test',
            note: 'test',
            amount: 0,
            createdAt: 0
        }
    }
    const state = expensesReducers ( expenses, action )
    expect ( state ).toEqual ( [ ...expenses, action.expense ] )
} )

test ( 'Should edit an expense with valid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        expense: {
            id: expenses[1].id,
            description: 'edit description'
        }
    }
    const state = expensesReducers ( expenses, action )
    expect ( state[1].description ).toBe ( action.expense.description )
} )

test ( 'Should not edit an expense with invalid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        expense: {
            id: '-1',
            description: 'edit description'
        }
    }
    const state = expensesReducers ( expenses, action )
    expect ( state ). toEqual ( expenses )
} )