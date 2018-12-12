import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters'
import moment from 'moment'

test ( 'Should generate setStartDate action object', () => {
    const date = moment().startOf( 'month' )
    const action = setStartDate ( date )
    expect ( action ).toEqual ( {
        type: 'SET_START_DATE',
        filters: {
            startDate: date
        }
    } )
} )

test ( 'Should generate setEndDate action object', () => {
    const date = moment().startOf( 'month' )
    const action = setEndDate ( date )
    expect ( action ).toEqual ( {
        type: 'SET_END_DATE',
        filters: {
            endDate: date
        }
    } )
} )

test ( 'Should generate sortByDate action object', () => {
    const action = sortByDate ()
    expect ( action ).toEqual ( {
        type: 'SORT_BY_DATE'
    } )
} )

test ( 'Should generate sortByAmount action object', () => {
    const action = sortByAmount ()
    expect ( action ).toEqual ( {
        type: 'SORT_BY_AMOUNT'
    } )
} )

test ( 'Should generate setTextFilter action object with provided values', () => {
    const action = setTextFilter( { text: 'Rent' } )
    expect ( action ).toEqual ( {
        type: 'SET_TEXT_FILTER',
        filters: {
            text: 'Rent'
        }
    } )
} )

test ( 'Should generate setTextFilter action object with default values', () => {
    const action = setTextFilter()
    expect ( action ).toEqual ( {
        type: 'SET_TEXT_FILTER',
        filters: {
            text: ''
        }
    } )
} )