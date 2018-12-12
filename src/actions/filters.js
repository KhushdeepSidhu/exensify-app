// SET_TEXT_FILTER
export const setTextFilter = ( { text = '' } = {} ) => ( {
    type: 'SET_TEXT_FILTER',
    filters: {
        text
    }
} )

// SORTBY_DATE
export const sortByDate = () => ( {
    type: 'SORT_BY_DATE'
} )

// SORTBY_AMOUNT
export const sortByAmount = () => ( {
    type: 'SORT_BY_AMOUNT'
} )

// SET_START_DATE
export const setStartDate = ( startDate ) => ( {
    type: 'SET_START_DATE',
    filters: {
        startDate
    }
} )
// SET_END_DATE
export const setEndDate = ( endDate ) => ( {
    type: 'SET_END_DATE',
    filters: {
        endDate
    }
} )