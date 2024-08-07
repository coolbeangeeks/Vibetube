import React from 'react'
import Filterlist from './Filterlist'
import VideoContainer from './VideoContainer'

const Maincontainer = () => {
  return (
    <div className='w-5/6'>
        <Filterlist/>
        <VideoContainer/>
    </div>
  )
}

export default Maincontainer