import React from "react";
import {Route} from "react-router-dom";

import NavHeader from "./NavHeader";
import About from "./About";
import Registration from "./Authentication/Registration";
import Login from "./Authentication/Login";

export default function(reduxProps) {
    return (
        <>
            <NavHeader />
            <Route 
                path="/about" 
                component={About} 
            />
            <Route 
                path="/signup" 
                render={
                    (props) => <Registration name="Sign up" {...props} {...reduxProps}/>
                }
            />
            <Route 
                path="/login" 
                render={
                    (props) => <Login name="Log in" {...props} {...reduxProps}/>
                } 
            />
        </>
    );
}
