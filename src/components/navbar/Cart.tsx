import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from 'styled-components';

const CartButton = styled.button({
  borderRadius: "5px",
  backgroundColor: "#5bb166",
  color: "white",
  border: "none"
})

function Cart() {
  return (
    <div>
      <CartButton>
        <div className='d-flex gap-2 py-2 px-2'>
          Cart
          <ShoppingCartOutlinedIcon />
        </div>
      </CartButton>
    </div>
  )
}

export default Cart