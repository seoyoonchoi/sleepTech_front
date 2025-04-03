import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function UseNavigate() {

  const navigate = useNavigate();

  const exampleFunc = function(){
    console.log('안녕');
  }

  exampleFunc();

  const goToHomePage = () => {
    navigate('/');

  }

  const goToPrevPage = () => {
    navigate(-1);
  }

  const goToOtherPage = () => {
    navigate('/router/a', {state:{userId:12345}});
  }

  const isAuthenticated = true;

  const handleSignUp = () => {
    if(isAuthenticated){
      navigate('/');
    }
  }

  useEffect(() => {
    if(!isAuthenticated){
      navigate('/login');

    }
  },[isAuthenticated, navigate]);

  return (
    <div>
      <p>UseNavigate</p>
      <button onClick = {goToHomePage}>HomePage로 이동</button>
      <button onClick = {goToPrevPage}>이전페이지로 이동</button>
      <button onClick = {goToOtherPage}>다른페이지로 이동</button>
      <button onClick = {handleSignUp}>회원가입입</button>
    </div>
  )
}

export default UseNavigate