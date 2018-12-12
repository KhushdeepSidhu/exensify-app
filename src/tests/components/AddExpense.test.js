import React from 'react'
import { shallow } from 'enzyme'
import { AddExpense } from '../../components/AddExpense'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach ( () => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow ( <AddExpense addExpense = { addExpense } history = { history }/> )
} )

test ( 'Should render addExpense correctly', () => {
    expect ( wrapper ).toMatchSnapshot()
} )

test ( 'Should handle onSubmit correctly', () => {
    wrapper.find ( 'ExpenseForm' ).prop ( 'onSubmit' )( expenses[2] )
    expect ( history.push ).toHaveBeenLastCalledWith ( '/' )
    expect ( addExpense ).toHaveBeenLastCalledWith ( expenses[2] )
} )