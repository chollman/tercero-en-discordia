import React from "react";
import ViewCategories from "./forms/categories/view-categories";
import ViewAuthors from "../containers/forms/authors/view-authors";

const DashboardContent = ({ view }) => {
    const selectView = (view) => {
        let component = <h1>Hoy es un lindo día para crear contenidos</h1>;

        switch (view) {
            case 1:
                component = <ViewCategories />;
                break;
            case 2:
                component = <ViewAuthors />;
                break;
            default:
                return component;
        }
        return component;
    };
    return <div>{selectView(view)}</div>;
};

export default DashboardContent;
