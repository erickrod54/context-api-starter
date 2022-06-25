import React from "react";

/** Context-api-app version 1 - context js file - Features: 
 * 
 *          ---> Creating a Context -makes avaible 
 *              Provider and Consumer,
 *  
 *          ---> Building the Provider in order to link it 
 *              with the context and provide to the
 *              children -whatever i wrap with it- 
 * 
 *          ---> Providing 'hello' string as value to test 
 *              how is being distributed-
 * 
 * Notes: on the next versions i'll see how i can distribute
 * data, states, features - for testing porpouses -
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

return(
    <AppContext.Provider value='hello'>
        {children}
    </AppContext.Provider>
    )
} 



export { AppContext, AppProvider };