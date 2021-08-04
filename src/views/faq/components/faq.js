import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";

import "../faq.scss";

const Faq = () => {
    useEffect(() => {
        document.title = "Preguntas frecuentes | Editorial TED";
    }, []);

    return (
        <div className="ted-faq">
            <HeaderBar title="Preguntas frecuentes" link="faq" />
            <div>Preguntas frecuentes</div>
            <Footer />
        </div>
    );
};

export default Faq;
