import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";

import PageWrapper from "./ui/layout/page-wrapper/PageWrapper";
import Admin from "./views/auth";
import Login from "./views/auth/components/login";
import Logout from "./views/auth/components/logout";
import Signup from "./views/auth/components/register";
import Home from "./views/home";
import QuienesSomos from "./views/quienessomos";
import Servicios from "./views/servicios";
import Packs from "./views/packs";
import Libreria from "./views/libreria/containers/libreria";
import BookDetail from "./views/libreria/containers/book-detail";
import Faq from "./views/faq";
import Blog from "./views/blog";
import Precios from "./views/precios";
import Contacto from "./views/contacto";

const Routes = ({ location }) => {
    return (
        <Switch>
            <Route path="/admin">
                <PageWrapper location={location}>
                    <Admin />
                </PageWrapper>
            </Route>
            <Route path="/registro">
                <PageWrapper location={location}>
                    <Signup />
                </PageWrapper>
            </Route>
            <Route path="/login">
                <PageWrapper location={location}>
                    <Login />
                </PageWrapper>
            </Route>
            <Route path="/logout">
                <PageWrapper location={location}>
                    <Logout />
                </PageWrapper>
            </Route>
            <Route path="/quienessomos">
                <PageWrapper location={location}>
                    <QuienesSomos />
                </PageWrapper>
            </Route>
            <Route path="/servicios">
                <PageWrapper location={location}>
                    <Servicios />
                </PageWrapper>
            </Route>
            <Route path="/packs">
                <PageWrapper location={location}>
                    <Packs />
                </PageWrapper>
            </Route>
            <Route path="/libreria/libro/:bookId">
                <PageWrapper location={location}>
                    <BookDetail />
                </PageWrapper>
            </Route>
            <Route path="/libreria/:catId">
                <PageWrapper location={location}>
                    <Libreria />
                </PageWrapper>
            </Route>
            <Route path="/libreria">
                <PageWrapper location={location}>
                    <Libreria />
                </PageWrapper>
            </Route>
            <Route path="/faq">
                <PageWrapper location={location}>
                    <Faq />
                </PageWrapper>
            </Route>
            <Route path="/blog">
                <PageWrapper location={location}>
                    <Blog />
                </PageWrapper>
            </Route>
            <Route path="/precios">
                <PageWrapper location={location}>
                    <Precios />
                </PageWrapper>
            </Route>
            <Route path="/contacto">
                <PageWrapper location={location}>
                    <Contacto />
                </PageWrapper>
            </Route>
            <Route path="/">
                <PageWrapper location={location}>
                    <Home />
                </PageWrapper>
            </Route>
        </Switch>
    );
};

Routes.propTypes = {
    location: PropTypes.object.isRequired,
};

export default Routes;
