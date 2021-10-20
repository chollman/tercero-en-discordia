import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Plan from "./plan";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import "../packs.scss";

const Packs = () => {
    useEffect(() => {
        document.title = "Packs promocionales | Editorial TED";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ted-packs">
            <HeaderBar title="Packs Promocionales" link="packs" />
            <section className="main-section">
                <Container>
                    <Row>
                        <Col className="main-title" md={12}>
                            <h2>Elegí el Pack que más se ajuste a tu proyecto</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <Plan title="Edición Plata" classes="plan1">
                                <ul>
                                    <li>
                                        <strong>Edición de libro formato 14 x 20</strong>
                                    </li>
                                    <li>
                                        <strong>Hasta 150 páginas</strong>
                                    </li>
                                    <li>
                                        <strong>Diseño de tapa</strong>
                                    </li>
                                    <li>
                                        <strong>Tramitación ISBN y Código de barras</strong>
                                    </li>
                                    <li>
                                        <strong>Impresión de 50 ejemplares</strong>
                                    </li>
                                    <li>
                                        <strong>Edición de E-book</strong> epub
                                    </li>
                                    <li>
                                        <strong>Distribución y venta mundial en librerías virtuales</strong>
                                    </li>
                                </ul>
                                <div className="pack-button">
                                    <LinkContainer to="/contacto">
                                        <Button>Pedir ahora!</Button>
                                    </LinkContainer>
                                </div>
                            </Plan>
                        </Col>
                        <Col md={3}>
                            <Plan title="Edición Oro" classes="plan2">
                                <ul>
                                    <li>
                                        <strong>Edición de libro formato 14 x 20</strong>
                                    </li>
                                    <li>
                                        <strong>Hasta 150 páginas</strong>
                                    </li>
                                    <li>
                                        <strong>Diseño de tapa</strong>
                                    </li>
                                    <li>
                                        <strong>Tramitación ISBN y Código de barras</strong>
                                    </li>
                                    <li>
                                        <strong>Impresión de 50 ejemplares</strong>
                                    </li>
                                    <li>
                                        <strong>Edición de E-book</strong> epub
                                    </li>
                                    <li>
                                        <strong>Distribución y venta mundial en librerías virtuales</strong>
                                    </li>
                                    <li>
                                        <strong>Corrección ortográfica y de Estilo</strong>
                                    </li>
                                    <li>
                                        <strong>Envío de Gacetilla de prensa a 50.000 contactos</strong>
                                    </li>
                                </ul>
                                <div className="pack-button">
                                    <LinkContainer to="/contacto">
                                        <Button>Pedir ahora!</Button>
                                    </LinkContainer>
                                </div>
                            </Plan>
                        </Col>
                        <Col md={3}>
                            <Plan title="Edición Platino" classes="plan3">
                                <ul>
                                    <li>
                                        <strong>Edición de libro formato 14 x 20</strong>
                                    </li>
                                    <li>
                                        <strong>Hasta 150 páginas</strong>
                                    </li>
                                    <li>
                                        <strong>Diseño de tapa</strong>
                                    </li>
                                    <li>
                                        <strong>Tramitación ISBN y Código de barras</strong>
                                    </li>
                                    <li>
                                        <strong>Impresión de 50 ejemplares</strong>
                                    </li>
                                    <li>
                                        <strong>Edición de E-book</strong> epub
                                    </li>
                                    <li>
                                        <strong>Distribución y venta mundial en librerías virtuales</strong>
                                    </li>
                                    <li>
                                        <strong>Corrección ortográfica y de Estilo</strong>
                                    </li>
                                    <li>
                                        <strong>Envío de Gacetilla de prensa a 50.000 contactos</strong>
                                    </li>
                                    <li>
                                        <strong>Impresión de señaladores para promoción</strong>
                                    </li>
                                    <li>
                                        <strong>Impresión de banner roll up</strong>
                                    </li>
                                </ul>
                                <div className="pack-button">
                                    <LinkContainer to="/contacto">
                                        <Button>Pedir ahora!</Button>
                                    </LinkContainer>
                                </div>
                            </Plan>
                        </Col>
                        <Col md={3}>
                            <Plan title="Edición Digital" classes="plan4">
                                <ul>
                                    <li>
                                        <strong>Vendé tu libro a todo el mundo</strong>
                                    </li>
                                    <li>
                                        <strong>Sin costos de almacenaje ni envío</strong>
                                    </li>
                                    <li>
                                        <strong>Diseño de interiores</strong> formato epub
                                    </li>
                                    <li>
                                        <strong>Diseño de tapa</strong>
                                    </li>
                                    <li>
                                        <strong>Tramitación de ISBN y Código de barras</strong>
                                    </li>
                                    <li>
                                        <strong>Tramitación de Derechos de Autor mundial</strong>
                                    </li>
                                    <li>
                                        <strong>Distribución y venta mundial en librerías virtuales</strong>
                                    </li>
                                </ul>
                                <div className="pack-button">
                                    <LinkContainer to="/contacto">
                                        <Button>Pedir ahora!</Button>
                                    </LinkContainer>
                                </div>
                            </Plan>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Packs;
