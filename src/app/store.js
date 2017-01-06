// store basically attach the listeners (reducers)
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
import HelloWorldReducer from "./reducers/HelloWorldReducer";
import HiReducer from "./reducers/HiReducer";

// it has reducer, middle ware and export it.
export default createStore(
  combineReducers({
    HelloWorldReducer,
    HiReducer
  }),
  
  applyMiddleware(logger(), thunk, promise())
);
