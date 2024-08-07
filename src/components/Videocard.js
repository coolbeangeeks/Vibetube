import React from 'react'

const Videocard = ({info}) => {
  const {snippet,statistics }=info
  const {channelTitle,title,thumbnails}=snippet
  return (
    <div className='max-w-80 shadow-md shadow-slate-300 rounded-lg'>
        <img className='rounded-lg'src={thumbnails.medium.url} alt="thumnail" />
        <p className='font-semibold'>{title}</p>
        <h4 className='font-bold font-serif'>{channelTitle}</h4>
        <h4><span className='text-gray-950'>Views. </span>{statistics.viewCount}</h4>
    </div>
  )
}

export default Videocard