import React from "react";

export default function(LanguageRoutes) {
    return function(HomePage) {
        if (!localStorage.getItem(process.env.TOKEN_NAME)) {
            return <HomePage />
        }
        if (localStorage.getItem(process.env.TOKEN_NAME)) {
            return <LanguageRoutes />
        }
    }
}
