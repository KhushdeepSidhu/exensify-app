import React from 'react'
import { shallow } from 'enzyme'
import { EditExpense } from '../../components/EditExpense'
import expenses from '../fixtures/expenses'

let startEditExpense, history, wrapper, startRemoveExpense

beforeEach ( () => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn ()
    history = { push: jest.fn() }
    wrapper = shallow ( <EditExpense 
        expense = { expenses[2] } 
        startEditExpense = { startEditExpense }
        startRemoveExpense = { startRemoveExpense }
        history = { history }
    /> )
} ) 

test ( 'Should render startEditExpense correctly', () => {
    expect ( wrapper ).toMatchSnapshot()
} )

test ( 'Should handle onSubmit', () => {
    wrapper.find ( 'ExpenseForm' ).prop ( 'onSubmit' ) ( expenses[2] )
    expect ( startEditExpense ).toHaveBeenLastCalledWith ( expenses[2], expenses[2].id )
    expect ( history.push ).toHaveBeenLastCalledWith ( '/' )
} )

test ( 'Should handle startRemoveExpense', () => {
    wrapper.find ( 'button' ).prop ( 'onClick' ) ()
    expect ( startRemoveExpense ).toHaveBeenLastCalledWith ( expenses[2].id )
    expect ( history.push ).toHaveBeenLastCalledWith ( '/' )
} )