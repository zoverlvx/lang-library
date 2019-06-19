import React from "react";
import useAuth from "../hooks/useAuth";

export default function(postHandler) {
    return function(props) {
        const [state, handleChange, o] = useAuth(props);
        const handler = o[postHandler];

        return (
            <form onSubmit={handler}> 
                <h1>{props.name}</h1>
                <input 
                    placeholder="username"
                    name="username"
                    type="text"
                    value={state.username}
                    onChange={handleChange}
                />
                <input 
                    placeholder="password"
                    name="password"
                    type="password"
                    value={state.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}
