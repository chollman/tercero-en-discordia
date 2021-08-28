import React from "react";
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
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(3)} block>
                Libros
            </Button>
        </div>
    );
};

export default DashboardMenu;
