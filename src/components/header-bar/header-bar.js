import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

import "./header-bar.scss";

const HeaderBar = ({ title, link }) => {
    return (
        <div className="header-bar">
            <Container>
                <Row>
                    <Col className="cp" md={9}>
                        <h1>{title}</h1>
                    </Col>
                    <Col className="header-breadcrumb" md={3}>
                        <Navbar expand="md" variant="dark">
                            <Nav>
                                <IndexLinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </IndexLinkContainer>
                                {link && (
                                    <LinkContainer to={`/${link}`}>
                                        <Nav.Link>{title}</Nav.Link>
                                    </LinkContainer>
                                )}
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
};

export default HeaderBar;
