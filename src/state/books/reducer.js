import {
    FETCHING_BOOKS,
    FETCHING_BOOKS_SUCCESS,
    FETCHING_BOOKS_ERROR,
    FETCHING_BOOK,
    FETCHING_BOOK_ERROR,
    FETCHING_BOOK_SUCCESS,
    CHANGE_AUTHORS,
    SELECT_BOOK,
    BOOK_EDIT_SUCCESS,
    BOOK_EDIT_ERROR,
} from "../constants";

const INITIAL_STATE = {
    booksArr: [],
    isFetching: false,
    errorMessage: "",
    numberOfBooks: 0,
    currentBook: {},
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
                currentBook: {},
                errorMessage: "",
            };
        case FETCHING_BOOKS_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        case FETCHING_BOOK:
            return { ...state, isFetching: true };
        case FETCHING_BOOK_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentBook: action.payload,
                errorMessage: "",
            };
        case FETCHING_BOOK_ERROR:
            return { ...state, isFetching: false, errorMessage: action.payload };
        case SELECT_BOOK:
            return { ...state, currentBook: action.book };
        case CHANGE_AUTHORS:
            return {
                ...state,
                currentBook: { ...state.currentBook, authors: action.authors },
            };
        case BOOK_EDIT_SUCCESS:
            return {
                ...state,
                booksArr: state.booksArr.map((element) =>
                    element._id === action.payload.bookId ? { ...element, ...action.payload.data } : element
                ),
                errorMessage: "",
            };
        case BOOK_EDIT_ERROR:
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}

export default booksReducer;
