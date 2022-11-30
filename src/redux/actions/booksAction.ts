import axios from "axios";
import { Dispatch } from "react";
import { IBook } from "../../interface";
import { BookActionType, BooksAction } from "./typesActions";


export const getBooks = (payload: IBook[])
:BooksAction => {
    return {type: BookActionType.GET_BOOKS, payload}
};

export const getBooksLoading = (payload: boolean)
:BooksAction => {
    return {type: BookActionType.GET_BOOKS_LOADING, payload}
};

export const getBooksError = (payload: string | null)
:BooksAction => {
    return {type: BookActionType.GET_BOOKS_ERROR, payload}
};

export const getBook = (payload: IBook)
:BooksAction => {
    return {type: BookActionType.GET_ONE_BOOK, payload}
};

export const getAllBooks = () => {
    return(dispatch: Dispatch<BooksAction>): void => {
        dispatch(getBooksLoading(true))
        dispatch(getBooksError(null))
        fetch('http://localhost:3000/books')
        .then((response) => {
            if(!response.ok) throw new Error('fetch books failed')
            return response.json();
        })
        .then((data) => dispatch(getBooks(data)))
        .catch((error) => dispatch(getBooksError(error)))
        .finally(() => dispatch(getBooksLoading(false)));

    }
}

export const getOneBook = (id:string | undefined) => {
    return(dispatch: Dispatch<BooksAction>): void => {
        dispatch(getBooksLoading(true))
        dispatch(getBooksError(null))
        fetch(`http://localhost:3000/books/${id}`)
        .then((response) => {
            if(!response.ok) throw new Error('fetch book failed')
            return response.json();
        })
        .then((data) => dispatch(getBook(data)))
        .catch((error) => dispatch(getBooksError(error)))
        .finally(() => dispatch(getBooksLoading(false)));

    }
}
