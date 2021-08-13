import { combineReducers } from "redux";
import auth from "./auth/reducer";
import books from "./books/reducer";

export default combineReducers({
    auth,
    books,
});
