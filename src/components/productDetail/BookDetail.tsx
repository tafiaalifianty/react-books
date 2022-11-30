import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { IBook } from '../../interface';

const CartButton = styled.button({
  borderRadius: "5px",
  backgroundColor: "#5bb166",
  color: "white",
  border: "none"
})

const VerticalLine = styled.div({
    height: "570px",
    borderLeft: "2px solid lightgray",
}) 

function BookDetail({title, price, image, rating, description}: IBook) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <div className='d-flex justify-content-center'>
                <img src={image}/>
                </div>
            </div>
            <div className='col-auto'>
                <VerticalLine></VerticalLine>
            </div>
            <div className='col'>
                <div className='row'>
                <h1>{title}</h1>
                </div>
                <div className='row'>
                <CartButton className="ms-2 py-1" style={{width: '150px'}}>Add to cart</CartButton>
                </div>
                <div className='row mt-4'>
                <p>${price} <br />{rating.rate} ★</p>
                <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookDetail