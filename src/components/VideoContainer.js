import React, { useEffect, useState } from 'react'
import { YouTube_api } from '../utils/constant'
import Videocard from './Videocard'
import { Link } from 'react-router-dom'
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
      {videodata.map((video)=>(<Link to={`/detail/${video.id}`}>
        <Videocard key={video.id} info={video}/>
      </Link>
       ))}
      
    </div>
  )
}

export default VideoContainer