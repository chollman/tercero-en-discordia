import React, { useEffect } from "react";
import MyCarousel from "./MyCarousel";
import MainInfo from "./sections/main-info";
import Services from "./sections/services";

import "../home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Editorial TED";
    }, []);

    return (
        <div className="ted-home">
            <MyCarousel />
            <MainInfo />
            <Services />
        </div>
    );
};

export default Home;
