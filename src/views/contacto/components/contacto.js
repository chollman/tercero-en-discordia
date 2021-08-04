import React, { useEffect } from "react";
import Footer from "../../../components/footer";

import "../contacto.scss";

const Contacto = () => {
    useEffect(() => {
        document.title = "Contacto | Editorial TED";
    }, []);

    return (
        <div className="ted-contacto">
            <div>Contacto</div>
            <Footer />
        </div>
    );
};

export default Contacto;
