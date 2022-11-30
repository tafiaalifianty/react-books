import { Filter } from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import BookCard from '../components/home/BookCard'
import NavbarHP from '../components/home/NavbarHP'
import FilterButton from "../components/navbar/FilterButton";
import { getAllBooks } from '../redux/actions/booksAction';
import { BooksDispatch } from '../redux/actions/typesActions';
import { RootState } from '../redux/reducers/indexReducers';

function HomePage() {
  const {books, booksLoading, booksError} = useSelector((state: RootState) => state.bookReducer);
  const dispatch: BooksDispatch= useDispatch()
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");
  console.log(books, booksLoading, booksError)

  useEffect(() => {
    dispatch(getAllBooks())
  }, [dispatch]);

  const filters: string[] =["All items", "Web development", "Backend"]
  return (
    <div className='container pt-3'>
        <NavbarHP onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}/>
        <div className='d-flex justify-content-center mt-5'>
          <div className='d-flex flex-row gap-2'>
            {filters.map((filter, index) => {
                return (
                    <FilterButton 
                    title={filter}
                    isActive={filter === activeFilter}
                    onClick={(e: React.MouseEvent) => {
                        const bl = e.target as HTMLElement;
                        bl.textContent?.toLowerCase() !== activeFilter
                        ? setActiveFilter(filter) : setActiveFilter("");
                    }}/>
                )
            })}
          </div>
        </div>
        <div className='row row-cols-3 mt-5'>
        {booksLoading && <h1>Loading...</h1>}
        {!booksLoading && booksError && <h1>Error</h1>}
        {!booksLoading && !booksError && books
        .filter((bl) => bl.title.toLowerCase().includes(inputValue.toLowerCase()))
        .filter((e) => e.category?.toLowerCase().includes(activeFilter.toLowerCase()))
        .map((book) => (
          <div key={book.id}>
            <BookCard 
            title={book.title}
            price={book.price}
            category={book.category}
            image = {book.image}
            rating = {book.rating}
            id={book.id}
          />
          </div>
        ))}
        </div>   
    </div>
  )
}

export default HomePage