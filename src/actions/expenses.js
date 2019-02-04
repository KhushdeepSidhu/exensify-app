import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = ( expense ) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = ( expenseData = {} ) => {
    return ( dispatch, getState ) => {
        const uid = getState().auth.uid
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }

        return database.ref( `users/${uid}/expenses` ).push ( expense ).then ( ( ref ) => {
            dispatch ( addExpense ( {
                id: ref.key,
                ...expense
            }) )
        } )

    }
}

// EDIT_EXPENSE
export const editExpense = ( { description, note, amount, createdAt }, id ) => {
    return ( {
        type: 'EDIT_EXPENSE',
        expense: {
            id,
            description,
            note,
            amount,
            createdAt
        }
    
} ) }

export const startEditExpense = ( { description, note, amount, createdAt }, id ) => {
    return ( dispatch, getState ) => {
        const uid = getState ().auth.uid
        return database.ref ( `users/${uid}/expenses/${id}` ).update ( { description, note, amount, createdAt } )
        .then ( () => {
            dispatch ( editExpense ( { description, note, amount, createdAt }, id ) )
        } )
    } 
}


// REMOVE_EXPENSE
export const removeExpense = ( id ) => ({
    type: 'REMOVE_EXPENSE',
    expense: {
        id
    }
})

// startRemoveExpense
export const startRemoveExpense = ( id ) => {
    return ( dispatch, getState ) => {
        const uid = getState().auth.uid
        return database.ref ( `users/${uid}/expenses/${id}` ).remove ().then ( () => {
            dispatch ( removeExpense ( id ) )
        } )
    }
}

// SET_EXPENSE
export const setExpenses = ( expenses ) => ( {
    type: 'SET_EXPENSES',
    expenses
} )

//export const startSetExpense
export const startSetExpenses = () => {
    return ( dispatch, getState ) => {
        const uid = getState().auth.uid
        return database.ref( `users/${uid}/expenses` ).once ( 'value' ).then ( ( snapshot ) => {
            
            const expenses = []

            snapshot.forEach ( ( childSnapshot ) => {
                expenses.push ( {
                id: childSnapshot.key,
                ...childSnapshot.val()
            } )
        })
        dispatch ( setExpenses ( expenses ) )
        } )
    }
}