/** Context-api-app version 3 - actions js file - Features: 
 * 
 *          ---> Building TOGGLE_ACTION.
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
 * drill to get to the Component that need it.
 * */

export const TOGGLE_ACTION = 'TOGGLE_ACTION'; 