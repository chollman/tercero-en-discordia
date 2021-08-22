import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./state/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem("token"), currentUser: localStorage.getItem("userId") },
    },
    composeWithDevTools(applyMiddleware(reduxThunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
