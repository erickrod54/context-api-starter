import React from "react";
import { AppContext } from "../context";
/** Context-api-app version 1 - 'FirstComponent' Component -
 *  Features: 
 *  
 *          ---> Importing and Placing 'AppContext'
 *              -to consume data from it- 
 * 
 *          ---> Testing data Provided by 'AppProvider'.
 * 
 * Notes:  Here i bring the value 'hello' previously passed
 * throught the provider.
 * 
 * */

const FirstComponent = () => {

    const data = React.useContext(AppContext)

    console.log('this is provided on FirstComponent ==> ', data)
    return(
        <>
        <h2>First Component</h2>
        <h4>this value is provided to use on 
                the first component: { data }</h4>
        </>
    )
}

export default FirstComponent