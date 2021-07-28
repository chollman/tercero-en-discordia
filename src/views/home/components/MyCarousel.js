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
                                <h5>First slide label</h5>
                                <p>
                                    Nulla vitae elit libero, a pharetra augue
                                    mollis interdum.
                                </p>
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
                                <h5>Second slide label</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </p>
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
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel
                                    scelerisque nisl consectetur.
                                </p>
                            </MDBCarouselCaption>
                        </MDBContainer>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </div>
    );
};

export default MyCarousel;
