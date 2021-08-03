import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";

import "../quienessomos.scss";

const Quienessomos = () => {
    useEffect(() => {
        document.title = "Quiénes somos | Editorial TED";
    }, []);

    return (
        <div className="ted-quienessomos">
            <HeaderBar title="Quiénes somos" link="quienessomos" />
            <div>Quienes somos</div>
            <Footer />
        </div>
    );
};

export default Quienessomos;
