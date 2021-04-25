import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import resultsReducer from "./store/Reducers/resultsReducer";
import counterReducer from "./store/Reducers/counterReducer";

import registerServiceWorker from "./registerServiceWorker";

const rootReducer = combineReducers({
  ctr: counterReducer,
  res: resultsReducer
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
