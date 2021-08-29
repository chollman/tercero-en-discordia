import {
    FETCHING_AUTHORS,
    FETCHING_AUTHORS_SUCCESS,
    FETCHING_AUTHORS_ERROR,
    AUTHOR_DELETE,
    AUTHOR_DELETE_SUCCESS,
    AUTHOR_DELETE_ERROR,
    AUTHOR_EDIT_SUCCESS,
    AUTHOR_EDIT_ERROR,
    AUTHOR_CREATE_SUCCESS,
    AUTHOR_CREATE,
    AUTHOR_CREATE_ERROR,
    SEARCHING_AUTHORS,
    SEARCHING_AUTHORS_SUCCESS,
    SEARCHING_AUTHORS_ERROR,
} from "../constants";

const INITIAL_STATE = {
    authorsArr: [],
    isFetching: false,
    errorMessage: "",
    numberOfAuthors: 0,
    isSearching: false,
    search: [],
};

function authorsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_AUTHORS:
        case AUTHOR_DELETE:
        case AUTHOR_CREATE:
            return { ...state, isFetching: true };
        case FETCHING_AUTHORS_ERROR:
        case AUTHOR_DELETE_ERROR:
        case AUTHOR_CREATE_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        case FETCHING_AUTHORS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                authorsArr: action.payload,
                numberOfAuthors: action.payload.length,
                errorMessage: "",
            };
        case AUTHOR_DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                authorsArr: state.authorsArr.filter((element) => element._id !== action.payload.authorId),
                numberOfAuthors: state.numberOfAuthors - 1,
                errorMessage: "",
            };
        case AUTHOR_EDIT_SUCCESS:
            return {
                ...state,
                authorsArr: state.authorsArr.map((element) =>
                    element._id === action.payload.authorId ? { ...element, ...action.payload.data } : element
                ),
                errorMessage: "",
            };
        case AUTHOR_EDIT_ERROR:
        case SEARCHING_AUTHORS_ERROR:
            return { ...state, errorMessage: action.payload };
        case AUTHOR_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                authorsArr: [...state.authorsArr, action.payload],
                numberOfAuthors: state.numberOfAuthors + 1,
                errorMessage: "",
            };
        case SEARCHING_AUTHORS:
            return { ...state, isSearching: true };
        case SEARCHING_AUTHORS_SUCCESS:
            return {
                ...state,
                isSearching: false,
                search: action.payload,
                errorMessage: "",
            };
        default:
            return state;
    }
}

export default authorsReducer;
