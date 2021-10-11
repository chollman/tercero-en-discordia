import React from "react";
import Button from "react-bootstrap/Button";

const DashboardMenu = ({ onCreateCategoryClicked }) => {
    return (
        <div>
            <h3>Librería</h3>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(1)} block>
                Categorías
            </Button>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(2)} block>
                Autores
            </Button>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(3)} block>
                Libros
            </Button>
            <h3>Blog</h3>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(4)} block>
                Posts
            </Button>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(5)} block>
                Tags
            </Button>
            <Button size="sm" variant="outline-primary" onClick={() => onCreateCategoryClicked(6)} block>
                Categorías
            </Button>
        </div>
    );
};

export default DashboardMenu;
