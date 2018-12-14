import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test ( 'Should correctly add up multiple expenses', () => {
    const total = getExpensesTotal ( expenses )
    expect ( total ).toBe ( 114345 )
} )

test ( 'Should correctly add up a single expense', () => {
    const total = getExpensesTotal ( [ expenses[1] ] )
    expect ( total ).toBe ( 109500 )
} )

test ( 'Should return 0 if no expense', () => {
    const total = getExpensesTotal ( [] )
    expect ( total ).toBe ( 0 )
} )

