import filtersReducers from '../../reducers/filters'
import moment from 'moment'

test ( 'Should setup default filter values', () => {
    const state = filtersReducers ( undefined, { type: "@@INIT" } )
    expect ( state ).toEqual ( {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    } )
} )

test ( 'Should set sortBy filter value to amount', () => {
    const state = filtersReducers ( undefined, { type: "SORT_BY_AMOUNT" } )
    expect( state.sortBy ).toBe( 'amount' ) 
} )

test ( 'Should set sortBy filter value to date', () => {
    const state = filtersReducers ( {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }, { type: "SORT_BY_DATE" } )
    expect( state.sortBy ).toBe( 'date' ) 
} )

test ( 'Should set text filter value', () => {
    const state = filtersReducers ( {
        text: 'Rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }, { type: "SET_TEXT_FILTER" } )
    expect ( state.text ).toBe ( 'Rent' )
} )

test ( 'Should set startDate filter value', () => {
    const state = filtersReducers ( {
        text: '',
        sortBy: 'amount',
        startDate: moment( 0 ),
        endDate: undefined
    }, { type: "SET_START_DATE" } )
    expect ( state.startDate ).toEqual ( moment( 0 ) )
} )

test ( 'Should set endDate filter value', () => {
    const state = filtersReducers ( {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: moment( 0 )
    }, { type: "SET_END_DATE" } )
    expect ( state.endDate ).toEqual ( moment( 0 ) )
} )