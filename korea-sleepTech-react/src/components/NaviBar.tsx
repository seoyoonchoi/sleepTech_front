import React from 'react'
import { NavLink } from 'react-router-dom';



function NaviBar() {
  const links = ['/', 'basic', 'hooks', 'router', 'router-practice'];

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      margin: '10px',
      padding: '10px',
      border: '1px solid black',
      borderRadius: '5px'
    }}>
      {links.map(link => (
        <NavLink to = {link} key={link} style={({ isActive }) => ({
          textDecoration: 'none',
          color: isActive ? 'white' : 'black',
          backgroundColor: isActive ? 'red' : 'lightgray',
          margin: '5px',
          padding: '10px 20px',
          borderRadius: '5px'
        })}>{link === '/' ? 'HOME' : link.toUpperCase()}</NavLink>
      ))}



    </div>
  )
}

export default NaviBar