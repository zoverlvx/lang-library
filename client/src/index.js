import React from 'react';
import thunk from "redux-thunk";
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter as Router} from "react-router-dom";
import './index.css';
import App from './App';
import rootReducer from "./reducers";
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
