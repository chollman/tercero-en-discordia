import React, { useRef, useState, useEffect } from "react";
import ReactPlaceholder from "react-placeholder";
//import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import ImageLoader from "../../../ui/imageLoader";

const Book = ({ book }) => {
    const [show, setShow] = useState(false);
    const elemRef = useRef();

    useEffect(() => {
        const divElement = elemRef.current;
        if (divElement) setShow(true);
    }, []);

    return (
        <LinkContainer to={`/libreria/libro/${book._id}`}>
            <div className={`ted-book ${show ? "" : "fadein"}`}>
                <div className="ted-book-cover">
                    {book.hasCoverImage ? (
                        <div>
                            <ImageLoader
                                callback={() => setShow(true)}
                                rounded
                                src={`${process.env.REACT_APP_API_URL}/books/cover/${book._id}`}
                            />
                        </div>
                    ) : (
                        <div ref={elemRef} className="book-cover-placeholder">
                            <i>Sin carátula</i>
                        </div>
                    )}
                </div>
                <ReactPlaceholder showLoadingAnimation ready={show} type="text" rows={2}>
                    <h3>{book.title}</h3>
                    <i>{book.author}</i>
                </ReactPlaceholder>
            </div>
        </LinkContainer>
    );
};

export default Book;
