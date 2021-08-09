import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

export default (ChildComponent) => {
    const ComposedComponent = (props) => {
        let history = useHistory();
        const { authenticated } = props;

        useEffect(() => {
            if (!authenticated) history.push("/");
        }, [authenticated, history]);

        return <ChildComponent props={props} />;
    };

    const mapStateToProps = (state) => ({
        authenticated: state.auth.authenticated,
    });

    return connect(mapStateToProps)(ComposedComponent);
};
