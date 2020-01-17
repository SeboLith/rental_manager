import React from "react";
import { useSelector } from 'react-redux';
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const { isLoading, isAuthenticated } = useSelector(state => state.auth);

    return (
        <Route
            {...rest}
            render={props => {
                if (isLoading) {
                    // @TODO Return spinner
                    return <h2>Loading...</h2>
                } else if (!isAuthenticated) {
                    return <Redirect to="/login" />
                } else {
                    return <Component {...props} />
                }
            }}
        />
    )
}

export default PrivateRoute;