import React, { useEffect } from "react";
import MyCarousel from "./MyCarousel";

import "../home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Editorial TED";
    }, []);

    return (
        <div>
            <MyCarousel />
        </div>
    );
};

export default Home;
