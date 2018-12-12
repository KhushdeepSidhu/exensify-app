import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount, wrapper

beforeEach ( () => {
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow ( <ExpenseListFilters 
        filters = { filters }
        setStartDate = { setStartDate }
        setEndDate = { setEndDate }
        setTextFilter = { setTextFilter }
        sortByDate = { sortByDate }
        sortByAmount = { sortByAmount }
    /> )
} )

test ( 'Should render ExpenseListFilters correctly', () => {
    expect ( wrapper ).toMatchSnapshot()
} )

test ( 'Should render ExpenseListFilters correctly with alt data', () => {
    wrapper.setProps ( {
        filters: altFilters
    } )
    expect ( wrapper ).toMatchSnapshot()
} )

test ( 'Should handle text change', () => {
    const value = altFilters.text
    wrapper.find ( 'input' ).simulate ( 'change', {
        target: { value }
    } )
    expect ( setTextFilter ).toHaveBeenLastCalledWith ( { text: value } )
} )

test ( 'Should sort by date', () => {
    const value = 'date'
    wrapper.setProps ( {
        filters: altFilters
    } )
    wrapper.find ( 'select' ).simulate ( 'change', {
        target: { value }
    } )
    expect ( sortByDate ).toHaveBeenLastCalledWith ()
} )


test ( 'Should sort by amount', () => {
    const value = 'amount'
    wrapper.find ( 'select' ).simulate ( 'change', {
        target: { value }
    } ) 
    expect ( sortByAmount ).toHaveBeenLastCalledWith ()
} )

test ( 'Should handle date changes', () => {
    const startDate = altFilters.startDate
    const endDate = altFilters.endDate
    wrapper.find ( 'DateRangePicker' ).prop ( 'onDatesChange' ) ( { startDate, endDate } )
    expect ( setStartDate ).toHaveBeenLastCalledWith ( startDate )
    expect ( setEndDate ).toHaveBeenLastCalledWith ( endDate )
} )

test ( 'Should handle date focus changes', () => {
    const calendarFocused = 'startDate'
    wrapper.find ( 'DateRangePicker' ).prop ( 'onFocusChange' ) ( calendarFocused )
    expect ( wrapper.state ( 'calendarFocused' ) ).toBe ( calendarFocused )
} )





