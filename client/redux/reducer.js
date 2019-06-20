//
//
//
//
//
// function dummyReducer (state = {}, action) {
//     return state;
// }
//
// export default dummyReducer


import steamReducer from "./steam";
import {combineReducers} from "redux";

const appReducer= combineReducers({
    steamReducer
})

export default appReducer
