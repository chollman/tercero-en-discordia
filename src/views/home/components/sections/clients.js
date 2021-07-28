import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import BannerProximamente from "../../../../styles/img/banner_proximamente.jpg";

const Clients = () => {
    return (
        <section className="main-section" id="clients">
            <Container>
                <Row>
                    <Col md={2}>
                        <h4 className="pull-left">NUESTRAS LIBRERÍAS</h4>
                        <p>
                            Encontrá todos nuestros libros en las principales
                            librerías virtuales del mundo.
                        </p>
                    </Col>
                    <Col md={10}>
                        <Image
                            src={BannerProximamente}
                            width="970"
                            height="150"
                            alt="Próximamente"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Clients;
