import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const ismenu=useSelector((store)=>store.sidebar.isMenuopen)
  if(!ismenu)return null;
  return (
    <div className='w-1/6 shadow-md'>
      <div>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>

      </div>
      <div>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>

      </div>

      
      
    </div>
  )
}

export default Sidebar