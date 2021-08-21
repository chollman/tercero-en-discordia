import React from "react";
import { Router } from "react-router-dom";
import history from "./history";

import "bootstrap/dist/css/bootstrap.min.css";
//import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "react-placeholder/lib/reactPlaceholder.css";
import "./styles/global.scss";

import Routes from "./routes";

const App = () => {
    return (
        <Router history={history}>
            <div className="ted">
                <Routes location={history.location} />
            </div>
        </Router>
    );
};

export default App;
