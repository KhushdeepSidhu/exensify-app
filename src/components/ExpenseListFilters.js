import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ( { startDate, endDate } ) => {
        this.props.setStartDate ( startDate )
        this.props.setEndDate ( endDate )
    }
    onFocusChange = ( calendarFocused ) => {
        this.setState ( () => ( { calendarFocused } ) )
    }
    onTextChange = ( e ) => {
        this.props.setTextFilter ( { text: e.target.value } ) 
        }
    onSortChange =  ( e ) => {
        if ( e.target.value === 'amount' ) {
            this.props.sortByAmount ()
        } else if ( e.target.value === 'date' ) {
            this.props.sortByDate ()
        } }
    render () {
        return (
            <div>
                <input type = "text" 
                    value = { this.props.filters.text } 
                    onChange = { this.onTextChange } 
                />
                <select 
                    value = { this.props.filters.sortBy } 
                    onChange = { this.onSortChange }
                    >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate = { this.props.filters.startDate }
                    endDate = { this.props.filters.endDate }
                    onDatesChange = { this.onDatesChange }
                    focusedInput = { this.state.calendarFocused }
                    onFocusChange = { this.onFocusChange }
                    numberOfMonths = { 1 }
                    isOutsideRange = { () => false }
                    showClearDates = { true }
                />
            </div> 
        )
    }
}

const mapDispatchToProps = ( dispatch ) => ( {
    setStartDate: ( startDate ) => dispatch ( setStartDate ( startDate ) ),
    setEndDate: ( endDate ) => dispatch ( setEndDate ( endDate ) ),
    setTextFilter: ( text ) => dispatch ( setTextFilter ( text ) ),
    sortByAmount: () => dispatch ( sortByAmount () ),
    sortByDate: () => dispatch ( sortByDate () )
} )

const mapStateToProps = ( state ) => {
    return {
        filters: state.filters
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( ExpenseListFilters )
