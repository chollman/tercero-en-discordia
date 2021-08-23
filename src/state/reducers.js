import { combineReducers } from "redux";
import auth from "./auth/reducer";
import books from "./books/reducer";
import categories from "./categories/reducer";

export default combineReducers({
    auth,
    books,
    categories,
});
