import React, { useState } from "react";

/** Context-api-app version 2 - context js file - Features: 
 * 
 *          ---> In this version i build and pass 
 *               througt the provider features, data
 *               on as an array and as a single data.
 * 
 * Notes: this version tests in a simple way how to
 * pass functionalities, and data in diferent ways and
 * how to tested and render properly in the components
 * that they are going to
 * */

//Doing this i have access to 'Provider' and 'Consumer'

/**The Consumer can be use sing 'useContext' hook*/

/**the Provider i use the alias that i set
 * -this case 'AppContext'-*/
const AppContext = React.createContext()


/**The provider is a Component that will distribute
 * whatever i need to provide - features, states, data -*/

/**i pass children to make the whole app the 'chilren'
 * of this provider, so i'll be able to provide*/
const AppProvider = ({ children }) => {
    
    /**here i build this state to get it on a destination
     * component*/
    const [ show, setShow ] = useState(false)
    
    /**here  build a simple functionality and i'll
     * get it using the provider on a destination 
     * component*/
    const handleShow = () => {
        setShow(!show)
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
    /**here i pass everything throught the provider*/
    <AppContext.Provider value={{
        show,
        handleShow,
        dataSet,
        singleData
    }}>
        {children}
    </AppContext.Provider>
    )
} 



export { AppContext, AppProvider };