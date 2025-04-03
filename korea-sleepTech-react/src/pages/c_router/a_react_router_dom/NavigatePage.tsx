import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavigatePage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  }
  const handleGoRouterHome = () =>{
    navigate('/router');
  }
  const handleGoRelativeRouter = () => {
    navigate('params/123');
  }
  return (
    <div>
      <h3>UseNavigate</h3>
      <button onClick={handleGoBack}>뒤로가기</button>
      <button onClick={handleGoRouterHome}>Home으로 이동하기</button>
      <button onClick={handleGoRelativeRouter}>Router Home 으로 이동</button>
    </div>
  )
}

export default NavigatePage