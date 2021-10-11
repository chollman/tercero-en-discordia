import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NewBlogContainer from "../../../containers/forms/blogs/new-blog";

const ViewBlogs = () => {
    const [inBlogEdit, setInBlogEdit] = useState(false);

    return (
        <div>
            {inBlogEdit ? <NewBlogContainer /> :
                (<Row>
                    <Col md={12}>
                        <div>
                            <h2 className="inline-heading">Lista de Blogs</h2>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={() => setInBlogEdit(true)}>
                                Nuevo Blog
                            </Button>
                        </div>
                        <Col className="result-list" md={12}>
                            <Row>Testing Row</Row>
                        </Col>
                    </Col>
                </Row>)}
        </div>
    );
};

export default ViewBlogs;
