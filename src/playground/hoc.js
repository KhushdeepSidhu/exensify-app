// HOC - Higher Order Component 

import React from 'react'
import ReactDOM from 'react-dom'

const Info = ( props ) => (
    <div>
        <h1>Info</h1>
        <p>This is { props.name }'s info: { props.info }</p>
    </div>
)

const withAdminWarning = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            { props.isAdmin && <p>This is private info. Please do not share.</p> }
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning ( Info )

const requireAuthentication = ( WrappedComponent ) => {
    return ( props ) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props}/> : <p>Please login to see the info</p> }
        </div>
    )
}

const AuthenticatedInfo = requireAuthentication ( Info )

// ReactDOM.render( <AdminInfo isAdmin = { true } info = "These are the details" name = "Khushdeep"/>, document.getElementById( 'app' ) )
ReactDOM.render( <AuthenticatedInfo isAuthenticated = { false } info = "These are the details" name = "Khushdeep"/>, document.getElementById( 'app' ) )