import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  width: 100%;
  background: wheat;
  position: fixed;
  top: 0;
  /* height: '10vh'; */
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
  margin: 0;
  padding: .8rem;
  z-index: 100;
`

export const NavLink = styled(Link)`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`


export const Bars = styled(FaBars)`
  display: none;
  
  @media screen and (max-width: 1200px) {
    color: #fff;
    display: block;
    position: absolute;
    top: 1rem;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 10;
    opacity: 1;
  }
`

export const NavMenu = styled.ul`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #d1cfcf;
  border-radius: 50px;
  box-shadow: 2px 1px 1px 1px #000;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`