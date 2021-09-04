import React from "react";
import ReactDOM from "react-dom";
//9. import the Provider from react-redux to provide the state to the react project
import { Provider } from "react-redux";
//10. import the createStore, combineReducers, and applyMiddleware from redux
import { createStore, combineReducers, applyMiddleware } from "redux";
//11. import thunkMiddleware from redux-thunk. This is a redux middleware to handle ajax call
import thunkMiddleware from "redux-thunk";
//12. import the reducer function from reducers.js
import { searchRobots, requestRobots } from "./reducers";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
//13. Declare the rootReducer. P.S. combinereducer function accept an object only
const rootReducer = combineReducers({ searchRobots, requestRobots });
//14. Declare the store and apply the redux middleware
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  //15. Wrap the <App /> with a Provider and pass the store as props
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
