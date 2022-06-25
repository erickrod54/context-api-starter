import React from "react";
import { AppContext } from "./context";
import FirstComponent from "./components/first.component";

/** Context-api-app version 1 - 'App' js file - Features: 
 *  
 *          ---> Importing and Placing 'AppContext'
 *              -to consume data from it- 
 * 
 *          ---> Testing data Provided by 'AppProvider'.
 * 
 * Notes: So '<App />' will become in 'AppProvider' > 
 * 'children'
 * 
 * Here i bring the value 'hello' previuosly passed
 * throught the provider.
 * */

function App() {


  const data = React.useContext(AppContext)

  console.log('this is Provided on App js ==>', data)
  return (
    <>
      <h2>Context Api App</h2>
      <h2>the value is: {data}</h2>
      <FirstComponent />
    </>
  );
}

export default App;
