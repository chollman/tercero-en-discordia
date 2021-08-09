import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../../state/auth/actions";

const Logout = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        //document.title = "Logout | Editorial TED";
        dispatch(
            logout(() => {
                history.push("/");
            })
        );
    });

    return <div>Logout</div>;
};

export default Logout;
