import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";

import "../libreria.scss";

const Libreria = () => {
    useEffect(() => {
        document.title = "Librería | Editorial TED";
    }, []);

    return (
        <div className="ted-libreria">
            <HeaderBar title="Librería" link="libreria" />
            <div>Libreria</div>
            <Footer />
        </div>
    );
};

export default Libreria;
