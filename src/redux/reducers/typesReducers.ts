import { IBook } from "../../interface";
export interface IBookState {
    book: IBook;
    books: IBook[];
    booksLoading: boolean;
    booksError: string | null;
}