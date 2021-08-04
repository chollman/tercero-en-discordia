import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";

import "../precios.scss";

const Precios = () => {
    useEffect(() => {
        document.title = "Precios | Editorial TED";
    }, []);

    return (
        <div className="ted-precios">
            <HeaderBar title="Solicitá tu presupuesto" link="precios" />
            <div>Solicitá tu presupuesto</div>
            <Footer />
        </div>
    );
};

export default Precios;
