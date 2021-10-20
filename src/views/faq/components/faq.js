import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import HeaderBar from "../../../components/header-bar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../faq.scss";

const Faq = () => {
    useEffect(() => {
        document.title = "Preguntas frecuentes | Editorial TED";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ted-faq">
            <HeaderBar title="Preguntas frecuentes" link="faq" />
            <section className="main-section">
                <Container>
                    <Row>
                        <Col className="main-title" md={12}>
                            <ul className="faq">
                                <li>
                                    <span className="number">01</span>
                                    <div>
                                        <h4>¿Realizan el servicio de distribución de mi libro?</h4>
                                        <p>
                                            En cuando a la distribución es un tema delicado, muchas editoriales te van a
                                            ofrecer este servicio pero muy pocas podrán cumplir tus expectativas por
                                            varias razones:{" "}
                                        </p>
                                        <ul>
                                            <li>
                                                1) La cantidad de ejemplares que vas a imprimir es muy baja para cubrir
                                                la gran cantidad de librerías que hay en el país.
                                            </li>
                                            <li>
                                                2) Las librerías toman los libros en consignación (no los compran
                                                directamente) y suelen tardar desde 6 meses a 1 año en liquidar las
                                                ventas. Imaginate el tiempo adicional que tardarían en llegar las
                                                regalías al autor. Mejor ni pensarlo.
                                            </li>
                                            <li>
                                                3) El público que acude a librerías es heterogéneo, siendo muy difícil
                                                el encuentro entre tu libro y su público afín.
                                            </li>
                                            <li>
                                                4) Si al librero no le interesa el libro o es de un autor poco
                                                reconocido, no lo exhibe ni lo ofrece, por lo tanto tu libro quedará
                                                inmerso en la maraña de libro, deteriorándose, tomando humedad en un
                                                depósito sin la posibilidad de ser vendido o perdido sin poder
                                                recuperarse.
                                            </li>
                                            <li>
                                                5) Perdés absoluto control de tus libros. No sabes dónde están, si se
                                                vendieron o no, qué librería los ha vendido. La información queda en una
                                                nebulosa.
                                            </li>
                                        </ul>

                                        <p>
                                            Por eso lo ideal es que puedas vender tus libros vos misma, a través de
                                            eventos o charlas a los que acudan las personas directamente interesadas en
                                            la temática. Donde podrás tener más ventas y tener un absoluto control sobre
                                            las mismas, percibiendo el 100% de la ganancia que en otro caso se llevarían
                                            los intermediarios (las librerías y la editorial).
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">02</span>
                                    <div>
                                        <h4>Si vivo lejos, ¿puedo editar mi libro igualmente?</h4>
                                        <p>
                                            Sí, trabajamos mucho con clientes en otras provincias y países ya que la
                                            distancia no representa un problema: nos manejamos por mail durante todo el
                                            proceso de edición y luego los libros terminados los enviamos a tu casa
                                            mediante expreso o cualquier otro transporte.{" "}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">03</span>
                                    <div>
                                        <h4>¿Cómo calculo la cantidad de páginas que tendrá mi libro?</h4>
                                        <p>
                                            Hacer un cálculo exacto es difícil ya que hay que tener en cuenta tamaño de
                                            letra de tu original y formato de libro final. Si quieres tener una idea
                                            aproximada podríamos decir que una página A4 escrita en una letra Times New
                                            Roman y cuerpo 12 puntos, podría ocupar 2 páginas en formato 14 x 20. De
                                            todas maneras, para tener un cálculo todavía más acertado es conveniente que
                                            a la hora de solicitarnos un presupuesto nos especifiques la cantidad de
                                            caracteres CON espacios que tiene todo tu original.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <span className="number">04</span>
                                    <div>
                                        <h4>¿Es necesaria la Corrección Ortográfica y de Estilo?</h4>
                                        <p>
                                            Sí, consideramos de suma importancia que el libro, una vez escrito, sea
                                            corregido por un corrector profesional que pueda dar una mirada más
                                            distanciada del texto. Cuando estamos escribiendo un texto, muchas veces
                                            estamos tan inmersos en el escrito que por más que lo leamos muchas veces
                                            hay errores que no los vemos y por eso es necesaria una corrección
                                            exhaustiva y profesional por parte de un corrector que siempre estará en
                                            contacto con vos por cualquier duda o cunsulta.
                                        </p>
                                    </div>
                                </li>

                                <li>
                                    <span className="number">05</span>
                                    <div>
                                        <h4>¿Cuánto tarda la edición de mi libro?</h4>
                                        <p>
                                            El tiempo de edición depende mucho del tipo de publicación: si es un manual
                                            puede tener gráficos, fotografías, cuadros y requiere de una maquetación más
                                            compleja que lleva tiempo realizar; si es una novela sin imágenes, los
                                            tiempos pueden ser más cortos.{" "}
                                        </p>
                                        <p>Los tiempos estimados son 45 días desde la entrega del original.</p>
                                    </div>
                                </li>

                                <li>
                                    <span className="number">06</span>
                                    <div>
                                        <h4>¿Qué cantidad de ejemplares imprimo?</h4>
                                        <p>
                                            Esto depende mucho de la idea que tengas con la publicación. Es importante
                                            saber a qué público va dirigido y dónde puedes encontrar ese público para
                                            poder ofrecer el libro. El sistema que ofrecemos permite realizar tiradas
                                            cortas para que puedas ir testeando cómo se mueve tu libro en el mercado y
                                            cómo se va vendiendo. Si te va bien, fácilmente puedes realizar una
                                            reimpresión con un menor costo que la primera vez.
                                        </p>
                                        <p>Recomendamos una primer tirada de entre 100 y 300 ejemplares</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">07</span>
                                    <div>
                                        <h4>¿Cómo es el registro del libro?</h4>
                                        <p>
                                            La editorial se encarga únicamente de la realización del trámite de ISBN y
                                            Código de barras para poder comercializar el libro. Pero, como los Derechos
                                            son en todo momento del Autor y no de la ediorial, el autor puede hacer el
                                            registro de su obra en la Dirección Nacional de Derecho de Autor. Moreno
                                            1228, Buenos Aires, Tel: (011) 4381-0897/1475/4571/7451/3251 – 4383-2001.{" "}
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">08</span>
                                    <div>
                                        <h4>¿Cuál es el derecho de la Editorial TED sobre mi obra?</h4>
                                        <p>
                                            Tú como autor eres el único que tiene los derechos sobre tu obra. En nungún
                                            momento le cedes los derechos sobre tu obra a la editorial y es por eso que
                                            en la venta percibes el 100% de lo que vendas.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <span className="number">09</span>
                                    <div>
                                        <h4>¿Cómo debo entregar los originales?</h4>
                                        <p>
                                            Los originales los debes entregar en formato word sin ningún tipo de
                                            imágenes o diseño dentro del mismo. Simplemente el texto. Si tu libro
                                            llevará imégenes las debes adjuntar aparte en formato JPG a 300 dpi de
                                            resolución. Esto es, una calidad óptima para que en la impresión salga con
                                            buena definición.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </div>
    );
};

export default Faq;
