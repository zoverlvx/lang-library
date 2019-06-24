import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 100px;
    a {
        padding: 10px;
        color: black;
        text-decoration: none;
        border: 2px solid black;
    }
`

export default function() {
    return (
        <Div>
            <NavLink to="/about">
                About
            </NavLink>
            <NavLink to="/signup">
                Sign Up
            </NavLink>
            <NavLink to="/login">
                Log In
            </NavLink>
        </Div>
    );
}
