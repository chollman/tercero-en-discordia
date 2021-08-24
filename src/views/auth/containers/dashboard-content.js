import React from "react";
import CreateCategory from "./forms/create-category";
import ViewCategories from "../containers/forms/view-categories";

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
            default:
                return component;
        }
        return component;
    };
    return <div>{selectView(view)}</div>;
};

export default DashboardContent;
