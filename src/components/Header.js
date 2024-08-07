import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidebarslice';
const Header = () => {
  const dispatch=useDispatch()

  const sidebarmenu=()=>{
    dispatch(toggleMenu())

  }
  return (
    <div className='grid grid-flow-col p-5 shadow-sm'>
        <div className='flex col-span-2'>
            <RxHamburgerMenu className='h-14 text-2xl cursor-pointer'onClick={sidebarmenu}/>
            <img className='h-14 mx-2'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT769bgfTT-i73ZB4S0VR6Z_A4YEZyAOa92YQ&s" alt="Youtube" />


        </div>
        <div className='col-span-9 flex'>
            <input className='w-1/2 border border-gray-400 rounded-l-full 'type="text" placeholder='Search'/>
            <div className='border border-gray-500 rounded-r-full p-5 cursor-pointer '>
            <BsSearch/>
            </div>
           
        </div>
        <div>
        <FaUserCircle className='h-14 text-2xl'/>
        </div>
    </div>
  )
}

export default Header