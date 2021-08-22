import React from "react";
import CreateCategory from "../components/forms/create-category";

const DashboardContent = ({ view }) => {
    const selectView = (view) => {
        let component = <div>Default</div>;

        switch (view) {
            case 1:
                component = <CreateCategory />;
                break;
            case 2:
                component = <div>View Categories</div>;
                break;
            default:
                return component;
        }
        return component;
    };
    return <div>{selectView(view)}</div>;
};

export default DashboardContent;
