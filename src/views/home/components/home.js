import React, { useEffect } from "react";
import MyCarousel from "./MyCarousel";
import MainInfo from "./sections/main-info";
import Services from "./sections/services";
import RecentWorks from "./sections/recent-works";
import Autores from "./sections/autores";
import Clients from "./sections/clients";

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
            <RecentWorks />
            <Autores />
            <Clients />
        </div>
    );
};

export default Home;
