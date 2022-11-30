import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import FilterButton from './FilterButton';

function Filter() {
  const [activeFilter, setActiveFilter] = useState("");
  const filters: string[] =["All items", "Web development", "Backend"]
  console.log(activeFilter)

  return (
    <>
    <div className='d-flex flex-row gap-2'>
        {filters.map((filter, index) => {
            return (
                <FilterButton 
                title={filter}
                isActive={filter === activeFilter}
                onClick={(e: React.MouseEvent) => {
                    const bl = e.target as HTMLElement;
                    bl.textContent?.toLowerCase() !== activeFilter
                    ? setActiveFilter(filter) : setActiveFilter("");
                }}/>
            )
        })}
    </div>
    </>
  )
}

export default Filter