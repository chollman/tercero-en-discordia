import React from "react";
import CreateCategory from "./forms/categories/create-category";
import ViewCategories from "./forms/categories/view-categories";
import CreateAuthor from "./forms/authors/create-author";

const DashboardContent = ({ view }) => {
    const selectView = (view) => {
        let component = <h1>Hoy es un lindo día para crear contenidos</h1>;

        switch (view) {
            case 1:
                component = <CreateCategory />;
                break;
            case 2:
                component = <ViewCategories />;
                break;
            case 3:
                component = <CreateAuthor />;
                break;
            default:
                return component;
        }
        return component;
    };
    return <div>{selectView(view)}</div>;
};

export default DashboardContent;
