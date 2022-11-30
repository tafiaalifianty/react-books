import React from 'react'
import Filter from '../navbar/Filter'
import Logo from '../navbar/Logo'

function NavbarCP() {
  return (
    <>
    <div className='d-flex justify-content-start'>
        <Logo />
    </div>
    <div className='d-flex justify-content-center'>
        <Filter />
    </div>
    </>
  )
}

export default NavbarCP