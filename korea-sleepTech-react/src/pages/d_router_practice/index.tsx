import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Posts from './Posts'
import User from './User'

function Index() {
  return (
    <div>
      <Routes>
        <Route path = 'home' element = {<Home/>}/>
        <Route path = 'about' element = {<About/>}/>
        <Route path = 'contact' element = {<Contact/>}/>
        <Route path = 'user/:id' element = {<User/>}/>
        <Route path = 'posts' element = {<Posts/>}/>
        <Route path = '*' element = {<div>페이지를 찾을 수 없습니다.</div>}/>
      </Routes>
    </div>
  )
}

export default Index