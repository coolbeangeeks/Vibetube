import React from 'react'
import Filter from './Filter'
import { filterData } from '../utils/constant'

const Filterlist = () => {
  return (
    <div className='flex overflow-x-auto hide-scrollbar'>
      {filterData.map((data)=>
        (<Filter data={data}/>)
      )}

    </div>
  )
}

export default Filterlist