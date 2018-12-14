import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import expenses from '../fixtures/expenses'

test ( 'Should render expense summary correctly with multiple expenses', () => {
    const wrapper = shallow ( <ExpenseSummary expenses = { expenses }/> )
    expect ( wrapper ).toMatchSnapshot()
} )

test ( 'Should render expense summary correctly with single expense', () => {
    const wrapper = shallow ( <ExpenseSummary expenses = { [ expenses[1] ] }/> )
    expect ( wrapper ).toMatchSnapshot()
} )