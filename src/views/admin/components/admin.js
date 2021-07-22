import React, { useEffect } from "react";

const Admin = () => {
    useEffect(() => {
        document.title = "Admin | Editorial TED";
    }, []);

    return <div>Admin</div>;
};

export default Admin;
