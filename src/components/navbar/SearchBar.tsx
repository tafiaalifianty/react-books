import React from 'react'
import './SearchBar.css'

export const SearchBar = ({onChange}:{onChange: React.ChangeEventHandler}) => {
  return (
    <div>
      <form className='search-bar'>
        <input 
          type="search"
          placeholder='Search...' 
          className='search-bar'
          id='search-book'
          name='search-book'
          onChange={onChange}/>
      </form>
    </div>
  )
}

export default SearchBar