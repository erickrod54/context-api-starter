import React from "react";
import { AppContext } from "./context";
import FirstComponent from "./components/first.component";

/** Context-api-app version 2 - 'App' js file - Features: 
 *  
 *          ---> Getting state and functionality in order
 *                to implement it on the Component.
 * 
 * Notes: So '<App />' will become in 'AppProvider' > 
 * 'children'
 * 
 * Here i bring the value 'hello' previuosly passed
 * throught the provider.
 * */

function App() {

  const { show, handleShow } = React.useContext(AppContext)

  console.log(' value provided on App js  =>', show)

  return (
    <>
      
      <h2>Context Api App</h2>
      <h2>this is App js </h2>
        <button onClick={ () => handleShow() }>
          Hide/Show Action
        </button>

      { show && <FirstComponent />}

    </>
  );
}

export default App;
