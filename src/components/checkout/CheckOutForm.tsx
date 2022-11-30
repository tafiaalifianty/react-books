import React from 'react'

function CheckOutForm() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
            <label htmlFor="">Full Name</label>
                <input 
                type='text'
                name='fullname'
                id='fullname'
                className='form-control'
                placeholder='John Doe'/>
            </div>
            <div className='col'>
            <label htmlFor="">Email</label>
                <input 
                type='email'
                name='email'
                id='email'
                className='form-control'
                placeholder='john@doe.com'/>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col'>
            <label htmlFor="">Country</label>
                <input 
                type='text'
                name='fullname'
                id='fullname'
                className='form-control'
                placeholder='Choose a Country'/>
            </div>
            <div className='col'>
            <label htmlFor="">Address</label>
                <input 
                type='text'
                name='address'
                id='address'
                className='form-control'
                placeholder='Street Address'/>
            </div>
        </div>
        <div className='row mt-3'>
            <div className='col'>
            <label htmlFor="">Card Number</label>
                <input 
                type='number'
                name='cardnumber'
                id='cardnumber'
                className='form-control'
                placeholder='1234 1234 1234 1234'/>
            </div>
            <div className='col'>
            <label htmlFor="">Expiration Date</label>
                <input 
                type='text'
                name='expdate'
                id='expdate'
                className='form-control'
                placeholder='MM/YY'/>
            </div>
        </div>
        <div className='row mt-3'>            
            <div className='col'>
            <label htmlFor="">Zip Code</label><br />
                <input 
                type='number'
                name='zipcode'
                id='zipcode'
                className='form-control'
                placeholder='11655'/>
            </div>
            <div className='col'>
            </div>
        </div>
    </div>
  )
}

export default CheckOutForm