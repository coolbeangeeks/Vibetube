import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sidebarslice'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const dispatch = useDispatch()
     const {id}=useParams()
     console.log(id)
    useEffect(()=>{
        dispatch(closeMenu())
    })
  return (
    

<iframe id="player" type="text/html" width="1100" height="600"
  src={`http://www.youtube.com/embed/${id}?enablejsapi=1`}
  frameborder="0">

  </iframe>
  )
}

export default Detail