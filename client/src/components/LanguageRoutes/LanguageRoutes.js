import React from "react";
import {Route} from "react-router-dom";

export default function(reduxProps) {
    return (
        <>
           <Route 
               path="/languages"
               render={
                   () => <div>Languages section</div>
               }
           />
       </>
   );
}
