import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ViewAuthors from "../../../components/forms/authors/view-authors";
import { handleFetchingAuthors } from "../../../../../state/authors/actions";

const ViewAuthorsContainer = () => {
    const authors = useSelector((state) => state.authors);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(handleFetchingAuthors());
    }, [dispatch]);

    return <ViewAuthors authors={authors} />;
};

export default ViewAuthorsContainer;
