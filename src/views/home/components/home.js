import React, { useEffect } from "react";
import MyCarousel from "./MyCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import "../home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Editorial TED";
    }, []);

    return (
        <div>
            <MyCarousel />

            <section className="main-section main-info">
                <Container>
                    <Row>
                        <Col xs={9}>
                            <h4>Una editorial al servicio de los Autores</h4>
                            <p className="no-margin">
                                Tercero en discordia es una Editorial al
                                servicio de la cultura impulsando la edición de
                                libros de todo tipo. Cuenta con profesionales de
                                Edición y Diseño gráfico al servicio de los
                                autores e instituciones que deseen realizar el
                                sueño de publicar de una manera profesional y
                                obteniendo como resultado libros con garantía de
                                calidad.
                            </p>
                        </Col>
                        <Col className="ted-info-button">
                            <LinkContainer to="/precios">
                                <Button size="lg" variant="success">
                                    Solicita presupuesto
                                </Button>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;
