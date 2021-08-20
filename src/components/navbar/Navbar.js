import Container from "react-bootstrap/Container";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useSelector } from "react-redux";

import "./navbar.scss";

const NavbarGlobal = () => {
    const authenticated = useSelector((state) => state.auth.authenticated);

    return (
        <Navbar className="main-navbar" collapseOnSelect expand="md" bg="light" variant="light" fixed="top">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Editorial TED</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" />
                    <Nav>
                        <IndexLinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </IndexLinkContainer>
                        <LinkContainer to="/quienessomos">
                            <Nav.Link>Quiénes somos</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/servicios">
                            <Nav.Link>Servicios</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/packs">
                            <Nav.Link>Packs</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/libreria">
                            <Nav.Link>Librería</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/faq">
                            <Nav.Link>Faq</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blog">
                            <Nav.Link>Blog</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/precios">
                            <Nav.Link>Precios</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contacto">
                            <Nav.Link>Contacto</Nav.Link>
                        </LinkContainer>
                        {!authenticated && (
                            <>
                                {/*<LinkContainer to="/registro">*/}
                                {/*    <Nav.Link>Registro</Nav.Link>*/}
                                {/*</LinkContainer>*/}
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                        {authenticated && (
                            <>
                                <LinkContainer to="/admin">
                                    <Nav.Link>Admin</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/logout">
                                    <Nav.Link>Salir</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarGlobal;
