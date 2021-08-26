import React from "react";
//import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";

const DashboardMenu = ({ onCreateCategoryClicked }) => {
    return (
        <div>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(1)} block>
                Categorías
            </Button>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(2)} block>
                Autores
            </Button>

            {/*<MDBAccordion initialActive="accordionCollapse1">*/}
            {/*    <MDBAccordionItem collapseId="accordionCollapse1" headerTitle="Blog - Categorías">*/}
            {/*        <Button size="sm">Crear</Button>*/}
            {/*        <Button size="sm">Ver/Editar</Button>*/}
            {/*    </MDBAccordionItem>*/}
            {/*    <MDBAccordionItem collapseId="accordionCollapse2" headerTitle="Blog - Tags">*/}
            {/*        <Button size="sm">Crear</Button>*/}
            {/*        <Button size="sm">Ver/Editar</Button>*/}
            {/*    </MDBAccordionItem>*/}
            {/*    <MDBAccordionItem collapseId="accordionCollapse3" headerTitle="Blos - Posts">*/}
            {/*        <Button size="sm">Crear</Button>*/}
            {/*        <Button size="sm">Ver/Editar</Button>*/}
            {/*    </MDBAccordionItem>*/}
            {/*</MDBAccordion>*/}
        </div>
    );
};

export default DashboardMenu;
