import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

const DashboardMenu = ({ onCreateCategoryClicked }) => {
    return (
        <div>
            <MDBAccordion initialActive="accordionCollapse2">
                <MDBAccordionItem collapseId="accordionCollapse1" headerTitle="Categorías">
                    <Button size="sm" onClick={() => onCreateCategoryClicked(1)}>
                        Crear
                    </Button>
                    <Button size="sm" onClick={() => onCreateCategoryClicked(2)}>
                        Ver/Editar
                    </Button>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId="accordionCollapse2" headerTitle="Autores">
                    <Button size="sm" onClick={() => onCreateCategoryClicked(3)}>
                        Crear
                    </Button>
                    <Button size="sm">Ver/Editar</Button>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId="accordionCollapse3" headerTitle="Libros">
                    <Button size="sm">Crear</Button>
                    <Button size="sm">Ver/Editar</Button>
                </MDBAccordionItem>
            </MDBAccordion>

            <MDBAccordion initialActive="accordionCollapse1">
                <MDBAccordionItem collapseId="accordionCollapse1" headerTitle="Blog - Categorías">
                    <Button size="sm">Crear</Button>
                    <Button size="sm">Ver/Editar</Button>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId="accordionCollapse2" headerTitle="Blog - Tags">
                    <Button size="sm">Crear</Button>
                    <Button size="sm">Ver/Editar</Button>
                </MDBAccordionItem>
                <MDBAccordionItem collapseId="accordionCollapse3" headerTitle="Blos - Posts">
                    <Button size="sm">Crear</Button>
                    <Button size="sm">Ver/Editar</Button>
                </MDBAccordionItem>
            </MDBAccordion>
        </div>
    );
};

export default DashboardMenu;
