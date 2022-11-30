import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BookDetail from '../components/productDetail/BookDetail'
import NavbarPDP from '../components/productDetail/NavbarPDP'
import { RootState } from '../redux/reducers/indexReducers'
import { BooksDispatch } from '../redux/actions/typesActions';
import { getOneBook } from "../redux/actions/booksAction";

function ProductDetailPage() {
  const {id} = useParams();
  const {book, booksLoading, booksError} = useSelector((state: RootState) => state.bookReducer);
  const dispatch: BooksDispatch= useDispatch()
  console.log(book, booksLoading, booksError)

  useEffect(() => {
    dispatch(getOneBook(id))
  }, [dispatch]);

  return (
    <div className='container pt-3'>
        <NavbarPDP />
        <div className='row mt-5'>
        {booksLoading && <h1>Loading...</h1>}
        {!booksLoading && booksError && <h1>Error</h1>}
        {
          book? (
            <BookDetail 
              title={book.title}
              price={book.price}
              image={book.image}
              rating={book.rating}
              description={book.description}
            />
          ) : (<></>)
        }
        </div>
    </div>
  )
}

export default ProductDetailPage