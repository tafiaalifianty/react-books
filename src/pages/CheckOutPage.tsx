import React from 'react'
import CheckOutForm from '../components/checkout/CheckOutForm'
import NavbarCOP from '../components/checkout/NavbarCOP'

function CheckOutPage() {
  return (
    <div className='container pt-3'>
        <NavbarCOP />
        <div className='row mt-5'>
            <CheckOutForm />
        </div>
    </div>
  )
}

export default CheckOutPage