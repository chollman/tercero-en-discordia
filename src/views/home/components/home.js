import React, { useEffect } from "react";

import "../home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Editorial TED";
    }, []);

    return <div>Home</div>;
};

export default Home;
