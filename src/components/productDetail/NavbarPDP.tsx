import React from 'react'
import BackButton from '../navbar/BackButton'
import Cart from '../navbar/Cart'
import Filter from '../navbar/Filter'

function NavbarPDP() {
  return (
    <div className='d-flex justify-content-between mt-5'>
        <BackButton />
        <Filter />
        <Cart />
    </div>
  )
}

export default NavbarPDP