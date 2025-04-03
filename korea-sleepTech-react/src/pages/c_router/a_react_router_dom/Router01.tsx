import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import A from './A'
import B from './B'

function Router01() {
  return (
    <div>
      <p>Link 컴포넌트: 다른 URL로 이동시켜주는 컴포넌트</p>
      <Link to = "/basic">기초문법 이동</Link>
      <br />
      <Link to = "/hooks">Hooks 문법으로 이동</Link>


 

    </div>
  )
}

export default Router01