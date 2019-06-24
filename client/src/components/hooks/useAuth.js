import {useState} from "react";

export default function(props) {
    const [state, setState] = useState({
        username: "",
        password: ""
    });
    const defaultState = {
        username: "",
        password: ""
    };

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    function handleError(state) {
        if (!state.username || !state.password) {
            alert("Please, provide username and password.");
            return null;
        }
    }

    function handleLogin(e) {
        e.preventDefault();
        
        handleError(state);

        if (state.username && state.pasword) {
            props.loginUser(state)
                .then(() => props.history.push("/languages"));
            setState(defaultState);
        }
    }

    function handleSignup(e) {
        e.preventDefault();

        handleError(state);

        if (state.username && state.password) {
            props.signupUser(state);
            setState(defaultState);
        }
    }

    return [
        state,
        handleChange,
        {
            handleSignup,
            handleLogin
        }
    ];
}
