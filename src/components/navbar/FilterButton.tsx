import { color, fontWeight } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

const FilterBtn = styled.button({
  borderRadius: "10px",
  borderColor: "gainsboro"
})

interface IFilter {
  title: string,
  isActive: boolean,
  onClick: React.MouseEventHandler
}

function FilterButton({title, isActive, onClick}:IFilter) {
  return (
    <>
      <FilterBtn 
        onClick={onClick}
        style={{
          backgroundColor: `${isActive ? "lightgray" : "white"}`,
          color: `${isActive ? "white" : "black"}`,
          fontWeight: `${isActive ? "bold" : "normal"}`
        }}>{title}</FilterBtn>
    </>
  )
}

export default FilterButton 

{/* <div className='d-flex flex-row gap-2'>
<button className='filter-button'>All items</button>
<button className='filter-button'>Web development</button>
<button className='filter-button'>Backend</button>
</div> */}