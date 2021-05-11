import React from 'react'
import { Nav, NavLink, Bars, NavMenu } from "./FullMenuEl";


const FullMenu = ({toggle}) => {
  return (
    <>
      <Nav>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink to='/' exact activeStyle={{
            fontWeight: 'bold',
            fontSize: '2.3rem',
            color: '#042649'
          }}>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle={{
            fontWeight: 'bold',
            fontSize: '2.3rem',
            color: '#042649'
          }}>
            About
          </NavLink>
          <NavLink to='/projects' activeStyle={{
            fontWeight: 'bold',
            fontSize: '2.3rem',
            color: '#042649'
          }}>
            Projects
          </NavLink>
          <NavLink to='/contact' activeStyle={{
            fontWeight: 'bold',
            fontSize: '2.3rem',
            color: '#042649'
          }}>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default FullMenu