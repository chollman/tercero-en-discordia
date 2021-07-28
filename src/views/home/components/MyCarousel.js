import React from "react";
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
    MDBContainer,
} from "mdb-react-ui-kit";
import Slide1 from "../../../styles/img/slide1.png";
import Slide2 from "../../../styles/img/slide2.png";
import Slide3 from "../../../styles/img/slide3.png";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const MyCarousel = () => {
    return (
        <div className="ted-my-carousel">
            <MDBCarousel showControls showIndicators>
                <MDBCarouselInner>
                    <MDBCarouselItem
                        itemId={0}
                        className="carousel-first-slide"
                    >
                        <MDBContainer>
                            <MDBCarouselElement src={Slide1} alt="..." />
                            <MDBCarouselCaption>
                                <h2>¿Buscás un Editor?</h2>
                                <h3 className="gap">Envianos tu trabajo</h3>
                                <LinkContainer to="/contacto">
                                    <Button>¡Contactanos!</Button>
                                </LinkContainer>
                            </MDBCarouselCaption>
                        </MDBContainer>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        itemId={1}
                        className="carousel-second-slide"
                    >
                        <MDBContainer>
                            <MDBCarouselElement src={Slide2} alt="..." />
                            <MDBCarouselCaption>
                                <h2>¿Ya tenés tu obra lista?</h2>
                                <h3 className="gap">
                                    Solicitanos presupuesto para publicar!
                                </h3>
                                <LinkContainer to="/precios">
                                    <Button>¡Pedir presupuesto ahora!</Button>
                                </LinkContainer>
                            </MDBCarouselCaption>
                        </MDBContainer>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        itemId={2}
                        className="carousel-third-slide"
                    >
                        <MDBContainer>
                            <MDBCarouselElement src={Slide3} alt="..." />
                            <MDBCarouselCaption>
                                <h2>Precios promocionales</h2>
                                <h3 className="gap">
                                    Encontrá el precio a tu medida
                                </h3>
                                <LinkContainer to="/packs">
                                    <Button>¡Ver ahora!</Button>
                                </LinkContainer>
                            </MDBCarouselCaption>
                        </MDBContainer>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
};

export default MyCarousel;
