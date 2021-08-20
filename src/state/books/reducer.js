import { FETCHING_BOOKS, FETCHING_BOOKS_SUCCESS, FETCHING_BOOKS_ERROR } from "../constants";

const INITIAL_STATE = {
    booksArr: [],
    isFetching: false,
    errorMessage: "",
    numberOfBooks: 0,
};

function booksReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_BOOKS:
            return { ...state, isFetching: true };
        case FETCHING_BOOKS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                booksArr: action.payload,
                numberOfBooks: action.payload.length,
                errorMessage: "",
            };
        case FETCHING_BOOKS_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        default:
            return state;
    }
}

export default booksReducer;
