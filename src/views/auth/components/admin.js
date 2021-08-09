import React, { useEffect } from "react";
import requireAuth from "../../../hocs/requireAuth";

const Admin = () => {
    useEffect(() => {
        document.title = "Admin | Editorial TED";
    }, []);

    return <div>Admin</div>;
};

export default requireAuth(Admin);
