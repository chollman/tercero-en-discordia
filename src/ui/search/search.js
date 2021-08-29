import React, { useEffect, useRef, useState } from "react";
import FormBootstrap from "react-bootstrap/Form";
import { Field, Form } from "react-final-form";
import TextFieldAdapter from "../forms/text-field-adapter";
import { authorSearch } from "../../state/authors/actions";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Overlay from "react-bootstrap/Overlay";

import "./search.scss";

const Search = () => {
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedArr, setSelectedArr] = useState([]);
    const [showTooltip, setShowTooltip] = useState(false);

    const searchResults = useSelector((state) => state.authors.search);
    const isSearching = useSelector((state) => state.authors.isSearching);

    const tooltipTarget = useRef(null);

    const onSubmit = ({ search }) => {
        setSearchTerm(search);
    };
    const validate = () => {};

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

    const toggleSelection = (selection, form) => {
        let resultArr;
        if (selectedArr.find((elem) => elem._id === selection._id)) {
            resultArr = selectedArr.filter((elem) => elem._id !== selection._id);
        } else {
            resultArr = [...selectedArr, selection];
        }
        setSelectedArr(resultArr);
        setShowTooltip(false);
        setSearchTerm("");
        form.reset();
    };

    const showResults = (results, form) => {
        return results.map((result) => {
            return (
                <Button onClick={() => toggleSelection(result, form)} key={result._id}>
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
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, form }) => (
                    <FormBootstrap id="search-form" onSubmit={handleSubmit}>
                        <FormBootstrap.Row className="search-box-row mb-3">
                            <FormBootstrap.Group
                                as={Col}
                                md="auto"
                                className="search-box"
                                controlId="formSearchBox"
                                ref={tooltipTarget}
                            >
                                <Field
                                    name="search"
                                    component={TextFieldAdapter}
                                    type="text"
                                    inputOnChange={handleChange}
                                    placeholder="Buscar un autor"
                                />
                            </FormBootstrap.Group>
                            {isSearching && (
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Cargando...</span>
                                </Spinner>
                            )}
                        </FormBootstrap.Row>
                        <Overlay target={tooltipTarget.current} show={showTooltip} placement="right">
                            {({ placement, arrowProps, show: _show, popper, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                        backgroundColor: "rgba(255, 100, 100, 0.85)",
                                        padding: "2px 10px",
                                        color: "white",
                                        borderRadius: 3,
                                        ...props.style,
                                    }}
                                >
                                    {showResults(searchResults, form)}
                                </div>
                            )}
                        </Overlay>
                    </FormBootstrap>
                )}
            />
            {showSelection()}
        </div>
    );
};

export default Search;
