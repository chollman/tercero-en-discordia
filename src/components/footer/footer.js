import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./footer.scss";

const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <Row>
                    <Col className="cp" md={4}>
                        &copy; 2021 Editorial TED. Todos los derechos
                        reservados.
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col className="cp with-icons" md={5}>
                                <i className="fas fa-envelope"></i>
                                <strong>Email: </strong>{" "}
                                <a href="mailto:contacto@terceroendiscordia.com.ar">
                                    contacto@terceroendiscordia.com.ar
                                </a>
                            </Col>
                            <Col md={7}>
                                <Row>
                                    <Col className="cp with-icons" md={6}>
                                        <i className="fas fa-phone"></i>
                                        <strong>Whatsapp:</strong> (54) 9 11
                                        6054 3905
                                    </Col>
                                    <Col md={6}>
                                        <ul className="social pull-right">
                                            <li>
                                                <a
                                                    rel="noreferrer"
                                                    href="https://www.facebook.com/editorialted"
                                                    target="_blank"
                                                >
                                                    <i className="fab fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noreferrer"
                                                    href="https://twitter.com/editorialted"
                                                    target="_blank"
                                                >
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noreferrer"
                                                    href="https://es.pinterest.com/editorialted/"
                                                    target="_blank"
                                                >
                                                    <i className="fab fa-pinterest"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noreferrer"
                                                    href="https://www.linkedin.com/company/editorial-ted"
                                                    target="_blank"
                                                >
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noreferrer"
                                                    href="https://www.youtube.com/channel/UCi-6ZNwPl8OLYAe8TEQ27Ww"
                                                    target="_blank"
                                                >
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    rel="noreferrer"
                                                    href="https://www.instagram.com/editorialted/"
                                                    target="_blank"
                                                >
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
