import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

import "../quienessomos.scss";

const Quienessomos = () => {
    useEffect(() => {
        document.title = "Quiénes somos | Editorial TED";
    }, []);

    return (
        <div className="ted-quienessomos">
            <HeaderBar title="Quiénes somos" link="quienessomos" />
            <section className="main-section">
                <Container>
                    <Row>
                        <Col md={6}>
                            <p>
                                Trabajamos con profesionales como Editores, Correctores y Diseñadores gráficos recibidos
                                de la Universidad de Buenos Aires. Somos gente apasionada por los libros y la lectura.
                                Elegimos esta carrera con el fin de aportar nuevos autores al mundo de la lectura.
                            </p>
                            <p>
                                Nos encanta asesorarte y acompañarte en el camino para cumplir tu sueño de publicar un
                                libro. Contamos con toda la experiencia y los conocimientos necesarios para impulsarte
                                dentro del medio editorial.
                            </p>
                            <p>
                                Todos nuestros conocimientos y experiencias están a tu entera disposición, con
                                honestidad y transparencia, para llevar a cabo con éxito el nacimiento de tu nueva
                                creación. ¡Contactanos!
                            </p>
                        </Col>
                        <Col md={6}>
                            <h2>Nuestros pilares</h2>
                            <div>
                                <ProgressBar className="capacity" now={100} label="Capacidad de escucha." />
                                <ProgressBar className="honesty" now={90} label="Honestidad." />
                                <ProgressBar className="dedication" now={80} label="Entrega y Dedicación." />
                                <ProgressBar className="improvement" now={70} label="Mejora continua." />
                            </div>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={6}>
                            <h3>¿Por qué elegirnos?</h3>
                            <ul style={{ listStyleType: "circle" }}>
                                <li>Por nuestra amplia experiencia en el mundo editorial.</li>
                                <li>Por nuestro asesoramiento personalizado y nuestra entrega al trabajo.</li>
                                <li>Por nuestro profesionalismo y el cuidado de los contenidos.</li>
                                <li>Por la calidad de nuestras ediciones.</li>
                                <li>Por la transparecia en la información.</li>
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3>Servicios</h3>
                            <MDBAccordion>
                                <MDBAccordionItem
                                    collapseId="accordionCollapse1"
                                    headerTitle="Corrección Ortográfica y de Estilo"
                                >
                                    Aunque pienses que tu libro está listo para editar, muchas veces al estar inmersos
                                    en el trabajo se nos pasan errores ortográficos, de sintaxis o incluso zonas en
                                    donde el texto no se entiende. Como expertos correctores estamos a disposición de
                                    los autores para maximizar la calidad de los textos.
                                </MDBAccordionItem>
                            </MDBAccordion>
                            <MDBAccordion>
                                <MDBAccordionItem
                                    collapseId="accordionCollapse1"
                                    headerTitle="Edición / Maquetación profesional"
                                >
                                    Deja en nuestras manos la elección de la tipografía y el diseño interior del libro.
                                    Te enviaremos una maqueta del libro inicial para que puedas ver cómo va a quedar
                                    estéticamente. Nos encargamos de todos los detalles: Tipografía, interlineados,
                                    márgenes, viudas y huérfanas, índices, numeración de página, etc.
                                </MDBAccordionItem>
                            </MDBAccordion>
                            <MDBAccordion>
                                <MDBAccordionItem collapseId="accordionCollapse1" headerTitle="Diseño de tapa">
                                    Si tienes una idea o una imagen la puedes aportar, pero si no tienes idea te
                                    enviaremos varios bocetos con diseños de tapa para que puedas elegir el que más te
                                    gusta, realizar los cambios que quieras y llegar a lo que será la tapa ideal para tu
                                    obra.
                                </MDBAccordionItem>
                            </MDBAccordion>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Quienessomos;
