import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
  width: 100%;
  background: wheat;
  position: fixed;
  top: 0;
  height: '10vh';
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  margin: 0 0 0 0;
  padding: 1rem;
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
  display: flex;
  align-items: center;
  background: #d1cfcf;
  /* margin-right: -24px; */
  padding: 0 3rem 0 1rem;
  /* border-top-left-radius: 50px; */
  /* border-bottom-left-radius: 50px; */
  /* box-shadow: 3px 1px 3px 1px #000; */

  @media screen and (max-width: 1200px) {
    display: none;
  }
`