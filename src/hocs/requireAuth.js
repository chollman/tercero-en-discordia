import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const RequireAuth = (ChildComponent) => {
    const ComposedComponent = (props) => {
        let history = useHistory();
        const { authenticated } = props;

        useEffect(() => {
            if (!authenticated) history.push("/");
        });

        return <>{authenticated && <ChildComponent props={props} />}</>;
    };

    const mapStateToProps = (state) => ({
        authenticated: state.auth.authenticated,
    });

    return connect(mapStateToProps)(ComposedComponent);
};

export default RequireAuth;
