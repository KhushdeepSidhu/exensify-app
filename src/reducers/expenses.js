// Expenses Reducer
const expenseReducerDefaultState = []

export default ( state = expenseReducerDefaultState, action ) => {
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
                        ...action.expense
                    }
                } else {
                    return expense
                }
            } )

        case 'SET_EXPENSES':
            return action.expenses
            
        default: 
            return state

    }
}