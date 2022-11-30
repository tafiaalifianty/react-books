import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IBook } from '../../interface';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const CartButton = styled.button({
  borderRadius: "5px",
  backgroundColor: "#5bb166",
  color: "white",
  border: "none"
})

function BookCard({id, title, price, category, image, rating}: IBook) {
  return (
    <>
      <Link to={`/bookdetails/${id}`}>
      <div className='mt-4'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            ${price} <br />{category}
          </Card.Text>
          <div className='d-flex justify-content-between'>
              <p>{rating.rate} ★</p>
              <CartButton>Add to cart</CartButton>
          </div>
        </Card.Body>
      </Card>
      </div>
      </Link>
    </>
  )
}

export default BookCard