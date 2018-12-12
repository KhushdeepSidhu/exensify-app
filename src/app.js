import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import configureStore from './store/configureStore'
import 'normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

console.log ( 'Test commit for git' )

const jsx = (
    <Provider store = { store }>
        <AppRouter />
    </Provider>
    
)

ReactDOM.render( jsx, document.getElementById( 'app' ) )




