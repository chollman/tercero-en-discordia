import React, { useEffect } from "react";

const Logout = () => {
    useEffect(() => {
        document.title = "Logout | Editorial TED";
    }, []);

    return <div>Logout</div>;
};

export default Logout;
