import { FETCHING_CATEGORIES, FETCHING_CATEGORIES_SUCCESS, FETCHING_CATEGORIES_ERROR } from "../constants";

const INITIAL_STATE = {
    categoriesArr: [],
    isFetching: false,
    errorMessage: "",
    numberOfCats: 0,
};

function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_CATEGORIES:
            return { ...state, isFetching: true };
        case FETCHING_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categoriesArr: action.payload,
                numberOfCats: action.payload.length,
                errorMessage: "",
            };
        case FETCHING_CATEGORIES_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        default:
            return state;
    }
}

export default categoriesReducer;
