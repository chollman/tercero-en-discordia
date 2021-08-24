import { combineReducers } from "redux";
import auth from "./auth/reducer";
import books from "./books/reducer";
import categories from "./categories/reducer";
import authors from "./authors/reducer";

export default combineReducers({
    auth,
    books,
    categories,
    authors,
});
