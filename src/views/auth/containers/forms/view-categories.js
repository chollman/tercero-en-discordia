import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchingCategories } from "../../../../state/categories/actions";
import ViewCategories from "../../components/forms/view-categories";

const ViewCategoriesContainer = () => {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleFetchingCategories());
    }, [dispatch]);

    return <ViewCategories categories={categories} />;
};

export default ViewCategoriesContainer;
