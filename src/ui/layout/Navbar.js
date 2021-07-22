import Container from "react-bootstrap/Container";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

const NavbarGlobal = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>Navbar</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <IndexLinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </IndexLinkContainer>
                        <LinkContainer to="/admin">
                            <Nav.Link>Admin</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarGlobal;
