import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";

import "../packs.scss";

const Packs = () => {
    useEffect(() => {
        document.title = "Packs promocionales | Editorial TED";
    }, []);

    return (
        <div className="ted-packs">
            <HeaderBar title="Packs Promocionales" link="packs" />
            <div>Packs</div>
            <Footer />
        </div>
    );
};

export default Packs;
