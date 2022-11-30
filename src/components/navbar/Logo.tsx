import React from 'react'
import logo from '../../assets/Images/logo.png';
import styled from 'styled-components';
import { height } from '@mui/system';
import {Link} from 'react-router-dom'

const LibraryLogo = styled.img({
    width: "80px",
    height: "60px",
})

function Logo() {
  return (
    <div>
        <Link to={'/'}>
            <LibraryLogo src={logo} />
        </Link>
    </div>
  )
}

export default Logo