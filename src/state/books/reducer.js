import {
    FETCHING_BOOKS,
    FETCHING_BOOKS_SUCCESS,
    FETCHING_BOOKS_ERROR,
    FETCHING_BOOK,
    FETCHING_BOOK_ERROR,
    FETCHING_BOOK_SUCCESS,
    SELECT_BOOK,
    BOOK_EDIT_SUCCESS,
    BOOK_EDIT_ERROR,
    BOOK_DELETE,
    BOOK_DELETE_ERROR,
    BOOK_DELETE_SUCCESS,
    BOOK_CREATE_SUCCESS,
    BOOK_CREATE_ERROR,
    BOOK_CREATE,
    FETCHING_BOOK_CATEGORIES,
    FETCHING_BOOK_CATEGORIES_SUCCESS,
    FETCHING_BOOK_CATEGORIES_ERROR,
    FETCHING_RELATED_BOOKS,
    FETCHING_RELATED_BOOKS_SUCCESS,
    FETCHING_RELATED_BOOKS_ERROR,
} from "../constants";

const INITIAL_STATE = {
    booksArr: [],
    isFetching: false,
    errorMessage: "",
    numberOfBooks: 0,
    currentBook: {},
    isFetchingCategoriesList: false,
    categoriesInUse: [],
    relatedBooks: [],
    isFetchingRelated: false,
};

function booksReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCHING_BOOKS:
        case BOOK_DELETE:
        case BOOK_CREATE:
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
        case BOOK_DELETE_ERROR:
        case BOOK_CREATE_ERROR:
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
        case BOOK_DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                booksArr: state.booksArr.filter((element) => element._id !== action.payload.bookId),
                numberOfBooks: state.numberOfBooks - 1,
                errorMessage: "",
                currentBook: {},
            };
        case BOOK_CREATE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                booksArr: [...state.booksArr, action.payload],
                numberOfBooks: state.numberOfBooks + 1,
                errorMessage: "",
            };
        case FETCHING_BOOK_CATEGORIES:
            return { ...state, isFetchingCategoriesList: true };
        case FETCHING_BOOK_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetchingCategoriesList: false,
                categoriesInUse: action.payload.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                }),
                errorMessage: "",
            };
        case FETCHING_BOOK_CATEGORIES_ERROR:
            return { ...state, isFetchingCategoriesList: false, errorMessage: action.payload };
        case FETCHING_RELATED_BOOKS_SUCCESS:
            return { ...state, isFetchingRelated: false, relatedBooks: action.payload, errorMessage: "" };
        case FETCHING_RELATED_BOOKS:
            return { ...state, isFetchingRelated: true };
        case FETCHING_RELATED_BOOKS_ERROR:
            return { ...state, isFetchingRelated: false, errorMessage: action.payload };
        default:
            return state;
    }
}

export default booksReducer;
