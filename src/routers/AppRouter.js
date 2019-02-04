import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import ExpenseDashboard from '../components/ExpenseDashboard'
import PageNotFound from '../components/PageNotFound'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history = { history }>
        <div>
            <Switch>
                <PublicRoute path="/" component={ LoginPage } exact={ true }/>
                <PrivateRoute path="/dashboard" component={ ExpenseDashboard } exact={ true }/>
                <PrivateRoute path="/create" component = { AddExpense } />
                <PrivateRoute path="/edit/:id" component = { EditExpense } />
                <Route component = { PageNotFound }/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter