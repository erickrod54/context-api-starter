import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context';

/** Context-api-app version 1 - 'index' js file - Features: 
 *  
 *          ---> Wrapping with 'AppProvider' the '<App />'. 
 * 
 * Notes: So '<App />' will become in 'AppProvider' > 
 * 'children'
 * 
 * Usually when i wrap the '<App />' is a one time step
 * -depends on the app needs- 
 * */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);


