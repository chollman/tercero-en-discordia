import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const RecentWorks = () => {
    return (
        <section className="main-section" id="recent-works">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h3>Últimos libros publicados</h3>
                        <p className="lead">
                            Autores que ya están promocionando sus libros.
                            ¡Sumate!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default RecentWorks;
