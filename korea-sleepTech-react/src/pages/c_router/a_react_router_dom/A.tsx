import React from 'react'
import { useLocation } from 'react-router-dom'

function A() {
  const location = useLocation();
  const {userId} = location.state || {};



  return (
    <div style = {{
      width: '200px',
      height: '200px'
    }}>UserId: {userId}</div>
  )
}

export default A