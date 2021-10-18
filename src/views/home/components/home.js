import React, { useEffect } from "react";
import MyCarousel from "./MyCarousel";
import MainInfo from "./sections/main-info";
import Services from "./sections/services";
import RecentWorks from "../containers/sections/recent-works";
import Autores from "./sections/autores";
import Clients from "./sections/clients";
import Footer from "../../../components/footer";

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
            <Footer />
        </div>
    );
};

export default Home;
