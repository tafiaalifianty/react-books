import React from 'react'
import Cart from '../navbar/Cart'
import Filter from '../navbar/Filter'
import Logo from '../navbar/Logo'

function NavbarCOP() {
  return (
    <div className='d-flex justify-content-between mt-5'>
        <Logo />
        <Filter />
        <Cart />
    </div>
  )
}

export default NavbarCOP