import React, { useEffect, useRef, useState } from "react";
import { authorSearch } from "../../state/authors/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Overlay from "react-bootstrap/Overlay";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./search.scss";

const SearchAuthors = ({ resultArr = [], onSearchChange, showLabels = false }) => {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedArr, setSelectedArr] = useState(resultArr);
    const [showTooltip, setShowTooltip] = useState(false);

    const searchResults = useSelector((state) => state.authors.search);
    const isSearching = useSelector((state) => state.authors.isSearching);

    const tooltipTarget = useRef(null);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        let timer;
        if (searchTerm) {
            timer = setTimeout(
                () =>
                    dispatch(
                        authorSearch(searchTerm, () => {
                            setShowTooltip(true);
                        })
                    ),
                500
            );
        }

        return () => clearTimeout(timer);
    }, [dispatch, searchTerm]);

    const toggleSelection = (selection) => {
        let resultArr;
        if (selectedArr.find((elem) => elem._id === selection._id)) {
            resultArr = selectedArr.filter((elem) => elem._id !== selection._id);
        } else {
            resultArr = [...selectedArr, selection];
        }
        setSelectedArr(resultArr);
        setShowTooltip(false);
        setSearchTerm("");
        onSearchChange(resultArr);
    };

    const showResults = (results) => {
        return results.map((result) => {
            return (
                <Button onClick={() => toggleSelection(result)} key={result._id}>
                    {result.name}
                </Button>
            );
        });
    };

    const showSelection = () => {
        return (
            <div>
                {selectedArr.map((selection) => {
                    return <label key={selection._id}>{selection.name}</label>;
                })}
            </div>
        );
    };

    return (
        <div className="search-complex">
            <Row className="search-box-row mb-1">
                <Col md="auto">
                    <input
                        className="form-control"
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="Buscar autor"
                        ref={tooltipTarget}
                    />
                </Col>
                {isSearching && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </Spinner>
                )}
            </Row>
            <Overlay target={tooltipTarget.current} show={showTooltip} placement="bottom">
                {({ placement, arrowProps, show: _show, popper, ...props }) => (
                    <div className="magic-tooltip" {...props}>
                        {showResults(searchResults)}
                    </div>
                )}
            </Overlay>
            {showLabels && showSelection()}
        </div>
    );
};

export default SearchAuthors;
