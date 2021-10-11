import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const ViewBlogs = () => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <div>
                        <h2 className="inline-heading">Lista de Blogs</h2>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={() => {
                                console.log("Clicked me!");
                            }}
                        >
                            Nuevo Libro
                        </Button>
                    </div>
                    <Col className="result-list" md={12}>
                        <Row>Testing Row</Row>
                    </Col>
                </Col>
            </Row>
        </div>
    );
};

export default ViewBlogs;
