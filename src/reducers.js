import { TOGGLE_ACTION } from './actions';

/** Context-api-app version 1 - 'reducers' js file - Features: 
 *  
 *          ---> Building 'TOGGLE_ACTION'  
 * 
 * Notes: i access to the 'state.show' and then
 * i mark it with '!' to toggle it
 * */

const reducer = ( state, action ) => {

    if (action.type === TOGGLE_ACTION) {
        return { ...state, show: !state.show }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default reducer;