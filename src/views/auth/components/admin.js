import React, { useEffect, useState } from "react";
import requireAuth from "../../../hocs/requireAuth";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../admin.scss";
import DashboardContent from "../containers/dashboard-content";
import DashboardMenu from "../containers/dashboard-menu";

const Admin = () => {
    const [view, setView] = useState(0);

    useEffect(() => {
        document.title = "Admin | Editorial TED";
    }, []);

    const onCreateCategoryClicked = (view) => {
        setView(view);
    };

    return (
        <section className="dashboard">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col className="dashboard-menu" md={2}>
                        <DashboardMenu onCreateCategoryClicked={onCreateCategoryClicked} />
                    </Col>
                    <Col className="dashboard-content-wrapper" md={10}>
                        <DashboardContent view={view} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default requireAuth(Admin);
