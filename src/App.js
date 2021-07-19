import React from "react";
import { Router } from "react-router-dom";
import history from "./history";

import "semantic-ui-css/semantic.min.css";
import "./styles/global.scss";

import Routes from "./routes";

const App = () => {
    return (
        <Router history={history}>
            <div className="bgm">
                <Routes location={history.location} />
            </div>
        </Router>
    );
};

export default App;
