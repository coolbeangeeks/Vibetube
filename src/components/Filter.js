import React from 'react'

const Filter = ({data}) => {
  return (
    <div className='py-2'>
        <button className='px-5 py-3 mx-3 bg-gray-200 rounded-lg hover:bg-black hover:text-white'>{data}</button>
    </div>
  )
}

export default Filter