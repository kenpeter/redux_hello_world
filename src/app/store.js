// what exactly is store, it stores reducer and middle ware
// create store
// combined reducer
// middle ware
import {
  createStore, 
  combineReducers, 
  applyMiddleware
}
from "redux";

// logger
import logger from "redux-logger";
// thunk for promise
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import HelloWordReducer from "./reducers/HelloWorldReducer";

// it has reducer, middle ware and export it.
export default createStore(
  combineReducers({
    HelloWordReducer
  }),
  
  applyMiddleware(logger(), thunk, promise())
);
