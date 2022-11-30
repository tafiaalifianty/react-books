import { IBook } from "../../interface";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IBookState } from "../reducers/typesReducers";


export enum BookActionType {
    GET_BOOKS = "GET_BOOKS",
    GET_BOOKS_LOADING = "GET_BOOKS_LOADING",
    GET_BOOKS_ERROR = "GET_BOOKS_ERROR",
    GET_ONE_BOOK = "GET_ONE_BOOK",
}

export interface IGetBooks {
    type: BookActionType.GET_BOOKS;
    payload: IBook[]
}

export interface IGetBooksLoading {
    type: BookActionType.GET_BOOKS_LOADING;
    payload: boolean
}

export interface IGetBooksError {
    type: BookActionType.GET_BOOKS_ERROR;
    payload: string | null
}

export interface IGetBook {
    type: BookActionType.GET_ONE_BOOK;
    payload: IBook
}

export type BooksAction = IGetBooks | IGetBooksLoading | IGetBooksError | IGetBook
export type BooksDispatch = ThunkDispatch<IBookState, any, AnyAction>