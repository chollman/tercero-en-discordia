import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import ServiceCard from "./service-card";
import Asesoria from "../../../styles/img/services/asesoria.svg";
import Correccion from "../../../styles/img/services/correccion.svg";
import Edicion from "../../../styles/img/services/edicion.svg";
import Disenio from "../../../styles/img/services/disenio.svg";
import Impresion from "../../../styles/img/services/impresion.svg";
import Ebook from "../../../styles/img/services/ebook.svg";
import Promocion from "../../../styles/img/services/promocion.svg";
import Tramitaciones from "../../../styles/img/services/tramitaciones.svg";

import "../servicios.scss";

const Servicios = () => {
    useEffect(() => {
        document.title = "Servicios | Editorial TED";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ted-servicios">
            <HeaderBar title="Servicios" link="servicios" />
            <section className="main-section">
                <Container>
                    <Row>
                        <Col md={4}>
                            <ServiceCard imageSrc={Asesoria} title="Asesoría editorial personalizada">
                                <p>
                                    Para orientarte en todo el proceso de edición de tu libro, te ofrecemos un
                                    asesoramiento personalizado por parte de la Editora a quien podrás consultar todas
                                    las dudas que surjan y quien garantizará el éxito del proyecto.
                                </p>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard imageSrc={Correccion} title="Corrección ortográfica y de estilo">
                                <p>
                                    Aunque pienses que tu libro está listo para editar, muchas veces al estar inmersos
                                    en el trabajo se nos pasan errores ortográficos, de sintaxis o incluso zonas en
                                    donde el texto no se entiende. Nuestros expertos correctores están a disposición de
                                    los autores para maximizar la calidad de los textos.
                                </p>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard imageSrc={Edicion} title="Edición / Maquetación Profesional">
                                <p>
                                    Dejá en nuestras manos la elección de la tipografía y el diseño interior del libro.
                                    Te enviaremos una maqueta del libro para que puedas ver cómo va a quedar
                                    estéticamente. Nos encargamos de todos los detalles: Tipografía, interlineados,
                                    márgenes, viudas y huérfanas, índices, numeración de página, etc.
                                </p>
                            </ServiceCard>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={4}>
                            <ServiceCard imageSrc={Disenio} title="Diseño de tapa a tu medida">
                                <p>
                                    Te enviaremos varios bocetos con diseños de tapa creativos para que puedas elegir el
                                    que más te guste, realizar los cambios que quieras y llegar a lo que será la tapa
                                    ideal para tu obra.
                                </p>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard imageSrc={Impresion} title="Impresión tiradas cortas">
                                <ul style={{ listStyleType: "circle" }}>
                                    <li>Imprimí solo lo que necesitás ¡Sin riesgos!</li>
                                    <li>Mayor margen de beneficios.</li>
                                    <li>Posibilidad de re-impresión inmediata.</li>
                                    <li>Ahorrá espacio y evita costos de almacenaje.</li>
                                    <li>Evitá capital inmovilizado.</li>
                                    <li>Evitá pérdidas de libros invendibles.</li>
                                </ul>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard imageSrc={Ebook} title="Tu E-book">
                                <ul style={{ listStyleType: "circle" }}>
                                    <li>Vendé tu libro a todo el mundo.</li>
                                    <li>Distribución en las principales librerías virtuales del mundo.</li>
                                    <li>Maquetación profesional en formato epub.</li>
                                    <li>Sin costos de almacenaje ni envío.</li>
                                </ul>
                            </ServiceCard>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={4}>
                            <ServiceCard imageSrc={Promocion} title="Promoción de tu libro">
                                <ul style={{ listStyleType: "circle" }}>
                                    <li>Email Marketing de tu libro.</li>
                                    <li>Señaladores.</li>
                                    <li>Banners Roll Up.</li>
                                    <li>Página web personalizada de tu libro.</li>
                                    <li>Tu libro en nuestra librería virtual.</li>
                                </ul>
                            </ServiceCard>
                        </Col>
                        <Col md={4}>
                            <ServiceCard imageSrc={Tramitaciones} title="Tramitaciones Legales">
                                <ul style={{ listStyleType: "circle" }}>
                                    <li>Tramitación de ISBN y código de barras (papel y digital).</li>
                                    <li>Tramitación de Derechos de Autor mundial.</li>
                                </ul>
                            </ServiceCard>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col className="presupuesto" md={12}>
                            <LinkContainer to="/precios">
                                <Button size="lg" variant="success">
                                    Pedir presupuesto
                                </Button>
                            </LinkContainer>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Servicios;
