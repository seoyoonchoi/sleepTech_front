import React from 'react'
import Router02 from './a_react_router_dom/Router01';
import Router01 from './a_react_router_dom/Router02';
import { Routes, Route, Link } from 'react-router-dom';
import B from './a_react_router_dom/B';
import A from './a_react_router_dom/A';
import UseParams from './a_react_router_dom/UseParams';
import UseNavigate from './a_react_router_dom/UseNavigate';
import ParamsPage from './a_react_router_dom/ParamsPage';
import NavigatePage from './a_react_router_dom/NavigatePage';

function Index() {
  const h2Style = {
    backgroundColor: "black",
    color: "orange",
  };
  return (
    <div>
      <h1 style = { {backgroundColor: "black", color: "pink"}}>==리액트 라우터==</h1>
      <h2 style={h2Style} >리액트 라우터</h2>
      
      <Router01/>
      <Router02/>

      <ul>
        <li>
          <Link to = "a">a</Link>
          </li><li>
          <Link to = "b">b</Link>
        </li>
      </ul>

      <Routes>
        <Route path = '/a' element = {<A/>}/>
        <Route path = '/b' element = {<B/>}/>
        <Route path = '/:id' element = {<UseParams/>}/>
      </Routes>

      <h2 style={h2Style}>useNavigate</h2>
      <UseNavigate/>
      <h2 style={h2Style}>UseParams and UseNavigate</h2>
      <ul>
        <li>
          <Link to='/router/param/123'>아이디 123</Link>
        </li>
        <li>
          <Link to='/router/param/hello'>아이디 헬로</Link>
        </li>
        <li>
          <Link to='/router/navigate'>네비게이트테스트</Link>
        </li>
      </ul>

      <Routes>
        <Route path = "param/:id" element = {<ParamsPage/>}/>
        <Route path = "navigate" element = {<NavigatePage/>}/>
      </Routes>
      


    </div>
  )
}

export default Index