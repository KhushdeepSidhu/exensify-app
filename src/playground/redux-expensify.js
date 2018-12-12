import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'


// Actions generators

// ADD_EXPENSE
const addExpense = ( { descirption = '', note = '', amount = 0, createdAt = 0 } ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        descirption,
        note,
        amount,
        createdAt
    }
})

// EDIT_EXPENSE
const editExpense = ( { id, amount } = {} ) => {
    console.log ( id )
    console.log ( amount )
    return ( {
        type: 'EDIT_EXPENSE',
        expense: {
            id,
            amount
        }
    
} ) 

}

// REMOVE_EXPENSE
const removeExpense = ( { id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})

// SET_TEXT_FILTER
const setTextFilter = ( { text } = {} ) => ( {
    type: 'SET_TEXT_FILTER',
    filters: {
        text
    }
} )

// SORTBY_DATE
const sortByDate = () => ( {
    type: 'SORT_BY_DATE'
} )

// SORTBY_AMOUNT
const sortByAmount = () => ( {
    type: 'SORT_BY_AMOUNT'
} )

// SET_START_DATE
const setStartDate = ( { startDate } = {} ) => ( {
    type: 'SET_START_DATE',
    filters: {
        startDate
    }
} )
// SET_END_DATE
const setEndDate = ( { endDate } = {} ) => ( {
    type: 'SET_END_DATE',
    filters: {
        endDate
    }
} )

// Expenses Reducer
const expenseReducerDefaultState = []

const expenseReducer = ( state = expenseReducerDefaultState, action ) => {
    switch ( action.type ) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ]

        case 'REMOVE_EXPENSE':
        return state.filter( ( expense ) => expense.id !== action.expense.id )

        case 'EDIT_EXPENSE':
        return state.map ( ( expense ) => {
            if ( expense.id === action.expense.id ) {
                return {
                    ...expense,
                    ...action.updates
                }
            } else {
                    return expense
                }
            } )
            
        default: 
            return state

    }
}

// Filters Reducer 
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = ( state = filterReducerDefaultState, action ) => {
    switch( action.type ) {

        case 'SET_TEXT_FILTER':
        return {
            ...state,
            ...action.filters
        }

        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }

        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        }

        case 'SET_START_DATE':
        return {
            ...state,
            ...action.filters
        }

        case 'SET_END_DATE':
        return {
            ...state,
            ...action.filters
        }

        default:
            return state
    }
}

// Get visible expenses 
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter ( ( expense ) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = typeof text !== 'string' || expense.descirption.toLowerCase().includes ( text.toLowerCase() )
    
        return startDateMatch && endDateMatch && textMatch
    } ).sort ( ( a, b ) => {
        if ( sortBy === 'date' ) {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if ( sortBy === 'amount' ) {
            return a.amount < b.amount ? 1 : -1
        }
    } ) 

    
    
}

const store = createStore(
    combineReducers( {
        expenses: expenseReducer,
        filters: filterReducer
    } )
)

const subscribe = store.subscribe( () => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses( state.expenses, state.filters )
    console.log ( visibleExpenses )
} ) 

const expenseOne = store.dispatch ( addExpense( { descirption:'rent', amount: 100, createdAt: -21000 } ) )
const expenseTwo = store.dispatch ( addExpense( { descirption:'Coffee', amount: 500, createdAt: -1300 } ) )

// store.dispatch( removeExpense( { id: expenseOne.expense.id } ) ) 

// store.dispatch ( editExpense ( { id: expenseTwo.expense.id,  amount: 700 } ) )

// store.dispatch ( setTextFilter ( { text: 'E' } ) )

// store.dispatch ( setTextFilter () )

store.dispatch ( sortByAmount () )

// store.dispatch ( sortByDate () )

//store.dispatch ( setStartDate ( { startDate: 500 } ) )

// store.dispatch ( setStartDate () )

//store.dispatch ( setEndDate ( { endDate: 1800 } ) )

// store.dispatch ( setEndDate () )


const demoState = {
    expenses: [ {
        id: 'wedewfefef',
        descirption: 'This is for the January rent',
        note: 'This is going to be the last payment for this address.',
        amount: 54500,
        createdAt: 0
    } ],
    filters: {
        text: 'rent',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}
