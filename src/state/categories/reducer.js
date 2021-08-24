import {
    FETCHING_CATEGORIES,
    FETCHING_CATEGORIES_SUCCESS,
    FETCHING_CATEGORIES_ERROR,
    CATEGORY_DELETE,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_ERROR,
    CATEGORY_EDIT_SUCCESS,
    CATEGORY_EDIT_ERROR,
} from "../constants";

const INITIAL_STATE = {
    categoriesArr: [],
    isFetching: false,
    errorMessage: "",
    numberOfCats: 0,
};

function categoriesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_CATEGORIES:
        case CATEGORY_DELETE:
            return { ...state, isFetching: true };
        case FETCHING_CATEGORIES_ERROR:
        case CATEGORY_DELETE_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        case FETCHING_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categoriesArr: action.payload,
                numberOfCats: action.payload.length,
                errorMessage: "",
            };
        case CATEGORY_DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                categoriesArr: state.categoriesArr.filter((element) => element._id !== action.payload.catId),
                numberOfCats: state.numberOfCats - 1,
                errorMessage: "",
            };
        case CATEGORY_EDIT_SUCCESS:
            return {
                ...state,
                categoriesArr: state.categoriesArr.map((element) =>
                    element._id === action.payload.catId ? { ...element, ...action.payload.data } : element
                ),
                errorMessage: "",
            };
        case CATEGORY_EDIT_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default categoriesReducer;
