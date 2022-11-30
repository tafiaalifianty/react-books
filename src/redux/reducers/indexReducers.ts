import { combineReducers } from "redux";
import bookReducer from "./booksReducers";

const reducers = combineReducers({bookReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;

