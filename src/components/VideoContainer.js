import React, { useEffect, useState } from 'react'
import { YouTube_api } from '../utils/constant'
import Videocard from './Videocard'
const VideoContainer = () => {
  const [videodata,setvideodata]=useState([])

  useEffect(()=>{
    getYoutubeVideo()
  },[])

  const getYoutubeVideo=async()=>{
    const video= await fetch(YouTube_api)
    const videoDatajson=await video.json()
    console.log(videoDatajson)
    setvideodata(videoDatajson.items)

  }
  return (
    <div className='flex flex-wrap gap-3 py-2 '>
      {videodata.map((video)=>(<Videocard key={video.id} info={video}/>))}
      
    </div>
  )
}

export default VideoContainer