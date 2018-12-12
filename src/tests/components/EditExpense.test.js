import React from 'react'
import { shallow } from 'enzyme'
import { EditExpense } from '../../components/EditExpense'
import expenses from '../fixtures/expenses'

let editExpense, history, wrapper, removeExpense

beforeEach ( () => {
    editExpense = jest.fn()
    removeExpense = jest.fn ()
    history = { push: jest.fn() }
    wrapper = shallow ( <EditExpense 
        expense = { expenses[2] } 
        editExpense = { editExpense }
        removeExpense = { removeExpense }
        history = { history }
    /> )
} ) 

test ( 'Should render EditExpense correctly', () => {
    expect ( wrapper ).toMatchSnapshot()
} )

test ( 'Should handle onSubmit', () => {
    wrapper.find ( 'ExpenseForm' ).prop ( 'onSubmit' ) ( expenses[2] )
    expect ( editExpense ).toHaveBeenLastCalledWith ( expenses[2], expenses[2].id )
    expect ( history.push ).toHaveBeenLastCalledWith ( '/' )
} )

test ( 'Should handle removeExpense', () => {
    wrapper.find ( 'button' ).prop ( 'onClick' ) ()
    expect ( removeExpense ).toHaveBeenLastCalledWith ( expenses[2].id )
    expect ( history.push ).toHaveBeenLastCalledWith ( '/' )
} )