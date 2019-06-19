import React from 'react';
import {withRouter} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App(props) {
  return (
    <HomePage {...props}/>        
  );
}

export default withRouter(App);
