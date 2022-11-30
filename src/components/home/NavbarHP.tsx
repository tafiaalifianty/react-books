import React from 'react'
import Cart from '../navbar/Cart'
import Filter from '../navbar/Filter'
import Logo from '../navbar/Logo'
import SearchBar from '../navbar/SearchBar'


function NavbarHP({onChange}:{onChange: React.ChangeEventHandler}) {
  return (
    <>
        <div className='d-flex justify-content-between mt-5'>
            <Logo />
            <div className='d-flex justify-content-end gap-3'>
                <SearchBar 
                onChange={onChange}/>
                <Cart />
            </div>
        </div>
    </>
  )
}

export default NavbarHP