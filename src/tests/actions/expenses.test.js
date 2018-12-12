import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test ( 'Should setup remove expense action object', () => {
    const action = removeExpense ( '123abc' )
    expect ( action ).toEqual ( {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: '123abc'
        }
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

test ( 'Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 2000,
        note: 'This is last months rent'
    }
    const action = addExpense ( expenseData )
    expect ( action ).toEqual ( {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any( String )
        }
    } )
} )

test ( 'Should setup add expense action object with default values', () => {
    const action = addExpense ()
    expect( action ).toEqual ( {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any( String ),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
        } 
    } )
} )