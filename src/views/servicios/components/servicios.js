import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";

import "../servicios.scss";

const Servicios = () => {
    useEffect(() => {
        document.title = "Servicios | Editorial TED";
    }, []);

    return (
        <div className="ted-servicios">
            <HeaderBar title="Servicios" link="servicios" />
            <div>Servicios</div>
            <Footer />
        </div>
    );
};

export default Servicios;
