import { BookActionType, BooksAction } from "../actions/typesActions";
import { IBookState } from "./typesReducers";


const initialState: IBookState = {
    book: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        }
    },
    books: [],
    booksLoading: true,
    booksError: null
}

export default function bookReducer(state = initialState, action:BooksAction):
IBookState {
    switch(action.type) {
        case BookActionType.GET_BOOKS:
            return{...state, books: action.payload};
        case BookActionType.GET_BOOKS_LOADING:
            return{...state, booksLoading: action.payload};
        case BookActionType.GET_BOOKS_ERROR:
            return{...state, booksError: action.payload};
        case BookActionType.GET_ONE_BOOK:
            return{...state, book: action.payload};
        default:
            return state;
    }
}