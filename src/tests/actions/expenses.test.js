import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startAddExpense,
    addExpense,
    removeExpense,
    startRemoveExpense,
    editExpense,
    startEditExpense,
    setExpenses,
    startSetExpenses }
    from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore ( [ thunk ] )
const uid = 'thisismytestuid'
const defaultAuthState = { auth : { uid } }

beforeEach ( ( done ) => {
    const expensesData = {}
    expenses.forEach ( ( { id, description, amount, note, createdAt } ) => {
        expensesData[ id ] = { description, amount, note, createdAt }
    } )
    database.ref ( `users/${uid}/expenses` ).set ( expensesData ).then ( () => done() )
} )

test ( 'Should setup remove expense action object', () => {
    const action = removeExpense ( '123abc' )
    expect ( action ).toEqual ( {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
    } )
} )

test ( 'Should remove expense from firebase', ( done ) => {
    const store = createMockStore ( defaultAuthState )
    const id = expenses [2].id
    store.dispatch ( startRemoveExpense ( id ) ).then ( () => {
        const actions = store.getActions()
        expect ( actions[0] ).toEqual ( {
            type: 'REMOVE_EXPENSE',
            expense: {
                id
            }
        } )
        return database.ref ( `users/${uid}/expenses/${id}` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
            expect ( snapshot.val() ).toBeFalsy()
            done ()
    } )
} )

test ( 'Should setup edit expense action object', () => {
    const expenseData = {
        description: 'New Description',
        note: 'New note',
        amount: 567,
        createdAt: 4890
    }
    const action = editExpense ( expenseData, '123abc' )  
    expect ( action ). toEqual ( {
        type: 'EDIT_EXPENSE',
        expense: {
            id: '123abc',
            ...expenseData
        }
    } )
} )

test ( 'Should edit expense from firebase', ( done ) => {
    const store = createMockStore ( defaultAuthState )
    const id = expenses[0].id
    const expenseData = {
        description: 'New Description',
        note: 'New note',
        amount: 567,
        createdAt: 4890
    }
    store.dispatch ( startEditExpense ( expenseData, id ) ).then ( () => {
        const actions = store.getActions ()
        expect ( actions[0] ).toEqual ( {
            type: 'EDIT_EXPENSE',
            expense: {
                id,
                ...expenseData
            }
        } )
        return database.ref ( `users/${uid}/expenses/${id}` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val().amount ).toBe ( 567 )
        done ()
    } )
} )

test ( 'Should setup add expense action object with provided values', () => {
    
    const action = addExpense ( expenses[1] )
    expect ( action ).toEqual ( {
        type: 'ADD_EXPENSE',
        expense: expenses[1]
    } )
} )

test ( 'Should add expense to database and store', ( done ) => {
    const store = createMockStore ( {} )
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }
    store.dispatch ( startAddExpense ( expenseData ) ).then ( () => {
        const actions = store.getActions()
        expect ( actions[0] ).toEqual ( {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any( String ),
                ...expenseData
            }
        } )

        return database.ref ( `expenses/${ actions[0].expense.id }` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val() ).toEqual ( expenseData )
        done ()
    } ) 

} ) 

test ( 'Should add expense with default values to database and store', ( done ) => {
    const store = createMockStore ( { defaultAuthState } )
    const expenseDefaults = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    store.dispatch ( startAddExpense ( ) ).then ( () => {
        const actions = store.getActions()
        expect ( actions[0] ).toEqual ( {
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any( String ),
                ...expenseDefaults
            }
        } )

        return database.ref ( `users/${ uid }/expenses/${ actions[0].expense.id }` ).once ( 'value' )
    } ).then ( ( snapshot ) => {
        expect ( snapshot.val() ).toEqual ( expenseDefaults )
        done ()
    } ) 
} )

test ( 'Should set up setExpenses action object with provided values', () => {
    const action = setExpenses ( expenses )
    expect ( action ).toEqual ( {
        type: 'SET_EXPENSES',
        expenses
    } )
} )

test ( 'Should fetch expenses from firebase', ( done ) => {
    const store = createMockStore ( defaultAuthState )
    store.dispatch ( startSetExpenses () ).then ( () => {
        const actions = store.getActions()
        expect ( actions[0] ).toEqual ( {
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    } ) 

} )