import React, { useEffect } from "react";
import MyCarousel from "./MyCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import Asesoria from "../../../styles/img/home/asesoria.svg";
import Correccion from "../../../styles/img/home/correccion.svg";
import Disenio from "../../../styles/img/home/disenio.svg";
import Ebook from "../../../styles/img/home/ebook.svg";
import Edicion from "../../../styles/img/home/edicion.svg";
import Impresion from "../../../styles/img/home/impresion.svg";
import Promocion from "../../../styles/img/home/promocion.svg";
import Tramitaciones from "../../../styles/img/home/tramitaciones.svg";

import "../home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Home | Editorial TED";
    }, []);

    return (
        <div className="ted-home">
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

            <section className="main-section" id="services">
                <LinkContainer to="/servicios">
                    <Container>
                        <Row>
                            <Col className="text-center">
                                <h3>¿Qué te ofrecemos?</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Asesoria}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Asesoría editorial personalizada
                                        </h4>
                                        <p>
                                            Orientación en el proceso de edición
                                            de tu libro.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Correccion}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Corrección ortográfica y de estilo
                                        </h4>
                                        <p>
                                            Revisión profesional del contenido.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Edicion}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Edición / Maquetación Profesional
                                        </h4>
                                        <p>
                                            Amplia trayectoria y experiencia en
                                            edición de libros.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Disenio}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Diseño de tapa a tu medida
                                        </h4>
                                        <p>
                                            Diseños atractivos para que tu libro
                                            se venda.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Impresion}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Impresión tiradas cortas
                                        </h4>
                                        <p>
                                            Costos reducidos para que hagas
                                            posible tu sueño.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Ebook}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Tu E-book
                                        </h4>
                                        <p>Vendé tu libro en todo el mundo.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Promocion}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading">
                                            Promoción de tu libro
                                        </h4>
                                        <p>
                                            Asesoramiento y Marketing Editorial.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} sm={6}>
                                <div className="media">
                                    <div className="pull-left">
                                        <i>
                                            <Image
                                                src={Tramitaciones}
                                                width={40}
                                                height={40}
                                            />
                                        </i>
                                    </div>
                                    <div className="media-body">
                                        <h4 className="media-heading mtop10">
                                            Tramitaciones legales.
                                        </h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </LinkContainer>
            </section>
        </div>
    );
};

export default Home;
