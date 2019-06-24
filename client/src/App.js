import React from 'react';
import {withRouter} from "react-router-dom";
import Authentication from "./components/HomePage/Authentication/Authentication"
import HomePage from "./components/HomePage/HomePage";
import LanguageRoutes from "./components/LanguageRoutes/LanguageRoutes";

const Interface = () => Authentication(
    LanguageRoutes
)(
    HomePage
)

function App(props) {
  return (
    <Interface />        
  );
}

export default withRouter(App);
