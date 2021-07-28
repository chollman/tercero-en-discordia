import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import OpeningQuote from "../../../../styles/img/opening-quote.png";
import ClosingQuote from "../../../../styles/img/closing-quote.png";
import Image from "react-bootstrap/Image";

const Autores = () => {
    return (
        <section className="main-section" id="autores">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>¿Qué opinan nuestros Autores?</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className="media">
                            <div className="media-body">
                                <h4 className="media-heading text-center">
                                    Eugenia Flannery
                                </h4>
                                <p>
                                    <Image
                                        className="opening-quote"
                                        src={OpeningQuote}
                                        width={40}
                                        height={40}
                                    />
                                    Muy agradecida y conforme con la labor de mi
                                    editora, publiqué tres libros de poemas que
                                    actualmente estoy presentando en centros
                                    culturales, la edición impecable, completa y
                                    los precios accesibles. Gracias.
                                    <Image
                                        className="closing-quote"
                                        src={ClosingQuote}
                                        width={40}
                                        height={40}
                                    />
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="media">
                            <div className="media-body">
                                <h4 className="media-heading text-center">
                                    Laura
                                </h4>
                                <p>
                                    <Image
                                        className="opening-quote"
                                        src={OpeningQuote}
                                        width={40}
                                        height={40}
                                    />
                                    ¡Excelente! Siempre que contraté a Tercero
                                    en discordia me entregaron productos de
                                    calidad y a tiempo. ¡Súper recomendable!
                                    <Image
                                        className="closing-quote"
                                        src={ClosingQuote}
                                        width={40}
                                        height={40}
                                    />
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="media">
                            <div className="media-body">
                                <h4 className="media-heading text-center">
                                    Abel Dario López
                                </h4>
                                <p>
                                    <Image
                                        className="opening-quote"
                                        src={OpeningQuote}
                                        width={40}
                                        height={40}
                                    />
                                    Excelente editorial. Tuve oportunidad de
                                    editar algunos libros con ellos y tienen una
                                    calidad de atención y asesoramiento
                                    extraordinaria. Da gusto trabajar con esta
                                    editorial, calidad y precios muy buenos. Muy
                                    recomendable.
                                    <Image
                                        className="closing-quote"
                                        src={ClosingQuote}
                                        width={40}
                                        height={40}
                                    />
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="media">
                            <div className="media-body">
                                <h4 className="media-heading text-center">
                                    Verónica Beritich
                                </h4>
                                <p>
                                    <Image
                                        className="opening-quote"
                                        src={OpeningQuote}
                                        width={40}
                                        height={40}
                                    />
                                    Mientras me desempeñaba como Editora
                                    Ejecutiva de la revista ESTADISTICA del
                                    Instituto Interamericano de Estadística,
                                    establecimos una excelente relación laboral
                                    con la editorial Tercero en Discordia que
                                    duró 8 años. La editorial se ocupó del
                                    marquetado interior e impresión de la
                                    revista con calidad y profesionalismo. Muy
                                    recomendable.
                                    <Image
                                        className="closing-quote"
                                        src={ClosingQuote}
                                        width={40}
                                        height={40}
                                    />
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="media">
                            <div className="media-body">
                                <h4 className="media-heading text-center">
                                    Julia Paolín
                                </h4>
                                <p>
                                    <Image
                                        className="opening-quote"
                                        src={OpeningQuote}
                                        width={40}
                                        height={40}
                                    />
                                    Junto a editorial ted cumplí uno de mis
                                    mayores sueños que fue publicar mi primer
                                    novela "El Misterio del Cerrojo Dorado". La
                                    elección de la editorial fue ardua,
                                    considerando y analizando varias opciones
                                    que se ajustaran a mis necesidades y
                                    editorial ted finalmente cumplió mis
                                    expectativas. Gracias por el asesoramiento,
                                    la dedicación y el trabajo personalizado.
                                    ¡La recomiendo sin dudas!
                                    <Image
                                        className="closing-quote"
                                        src={ClosingQuote}
                                        width={40}
                                        height={40}
                                    />
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="media">
                            <div className="media-body">
                                <h4 className="media-heading text-center">
                                    Elizabeth A. Suárez Schumacher
                                </h4>
                                <p>
                                    <Image
                                        className="opening-quote"
                                        src={OpeningQuote}
                                        width={40}
                                        height={40}
                                    />
                                    Muy buena Editorial. Los elegí para editar
                                    mi primer libro de poemas. La experiencia
                                    fue excelente, desde la atención hasta la
                                    calidad de impresión de los ejemplares, y el
                                    tiempo de entrega fue antes de lo esperado.
                                    ¡Los recomiendo! ¡Saludos!
                                    <Image
                                        className="closing-quote"
                                        src={ClosingQuote}
                                        width={40}
                                        height={40}
                                    />
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Autores;
