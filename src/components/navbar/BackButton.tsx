import React from 'react'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { NoEncryption } from '@mui/icons-material';

const ArrowBackButton = styled.button({
  border: "none",
  borderRadius: "100px",
  backgroundColor: "lightgray"
})

function BackButton() {
  return (
    <div>
      <Link to={'/'}>
        <ArrowBackButton>
          <ArrowBackIcon />
        </ArrowBackButton>
      </Link>
    </div>
  )
}

export default BackButton