import moment from 'moment'

// Filters Reducer 
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default ( state = filterReducerDefaultState, action ) => {
    switch( action.type ) {

        case 'SET_TEXT_FILTER':
        return {
            ...state,
            ...action.filters
        }

        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        }

        case 'SORT_BY_AMOUNT':
        return {
            ...state,
            sortBy: 'amount'
        }

        case 'SET_START_DATE':
        return {
            ...state,
            ...action.filters
        }

        case 'SET_END_DATE':
        return {
            ...state,
            ...action.filters
        }

        default:
            return state
    }
}