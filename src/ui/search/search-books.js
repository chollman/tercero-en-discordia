import React, { useEffect, useRef, useState } from "react";
import { bookSearch } from "../../state/books/actions";
import { useDispatch, useSelector } from "react-redux";
//import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
//import Overlay from "react-bootstrap/Overlay";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./search.scss";

const SearchBooks = ({ onSearchChange }) => {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    //const [showTooltip, setShowTooltip] = useState(false);

    const isSearching = useSelector((state) => state.books.isSearching);

    const tooltipTarget = useRef(null);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        let timer;
        timer = setTimeout(
            () =>
                dispatch(
                    bookSearch(searchTerm, (res) => {
                        //setShowTooltip(true);
                        onSearchChange(res);
                    })
                ),
            500
        );
        return () => clearTimeout(timer);
    }, [dispatch, searchTerm, onSearchChange]);

    // const showResults = (results) => {
    //     return results.map((result) => {
    //         return (
    //             <div className="book-result-wrapper" key={result._id}>
    //                 <Button onClick={() => onSearchChange(result)}>{result.title}</Button>
    //             </div>
    //         );
    //     });
    // };

    return (
        <div className="search-complex book-search">
            <Row className="search-box-row mb-1">
                <Col md="auto" className="search-box">
                    <input
                        className="form-control"
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Buscar libros"
                        ref={tooltipTarget}
                    />
                </Col>
                {isSearching && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                )}
            </Row>
            {/*<Overlay target={tooltipTarget.current} show={showTooltip} placement="bottom-start">*/}
            {/*    {({ placement, arrowProps, show: _show, popper, ...props }) => (*/}
            {/*        <div className="magic-tooltip search-books-tooltip" {...props}>*/}
            {/*            {showResults(searchResults)}*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</Overlay>*/}
        </div>
    );
};

export default SearchBooks;
