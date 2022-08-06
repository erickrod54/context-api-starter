import React, { useReducer } from "react";
import { TOGGLE_ACTION } from './actions'
import reducer from "./reducers";

/** Context-api-app version 3 - context js file - Features: 
 * 
 *          ---> Building an 'intialState'.
 * 
 *          ---> Implementing a 'TOGGLE_ACTION' action.
 * 
 *          ---> Dispatching 'TOGGLE_ACTION'.
 * 
 * Notes: The pattern design to build a react app
 * by the scale, is as follows:
 * 
 *    prop-drilling----> small applications (1 level deep)  
 * 
 *    context ---------> medium applications (2 level deep)
 * 
 *    context + actions 
 *         + reducer---> large applications (3 or more level deep)
 * 
 * the levels deep depends on how much the 'props' have to
 * drill to get to the Component that need it. also an intial
 * state that will keep initial values for state props.
 * */

/**this is the initial state */
const intialState = {
    show: false,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    
    const [ state, dispatch ] = useReducer( reducer, intialState );
    
    const handleShow = () => {
        dispatch({ type: TOGGLE_ACTION })
    }

    /**here is a single piece of data and i'll  
     * get it using the provider on a destination 
     * component*/
    const singleData = 'hello'

    /**here is data set and i'll  
     * get it using the provider on a destination 
     * component*/
    const dataSet = [ 
        {
            id: 1,
            text:'data for FirstComponent #1',
            comment:'ramdom comment 1'
        }, 
        {
            id: 2,
            text:'data for FirstComponent #2',
            comment:'ramdom comment 2'
        }, 
        {
            id: 3,
            text:'data for FirstComponent #3',
            comment:'ramdom comment 3'
        }
    ]
    
    
    

return(
    /**here i pass everything throught the provider,
     * i spread/copy the state - initalState - and
     * 'handleShow' will keep the action dispatch */
    <AppContext.Provider value={{
        ...state,
        handleShow,
        dataSet,
        singleData
    }}>
        {children}
    </AppContext.Provider>
    )
} 



export { AppContext, AppProvider };