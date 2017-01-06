import {render} from "react-dom";
import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import HelloWorldReducer from './reducers/HelloWorldReducer';
import App from "./containers/App";

let store = createStore(HelloWorldReducer);

render(
	<Provider store={store}>
  	<App />
	</Provider>,
  window.document.getElementById('app'));

