import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'


export const DropMenuContainer = styled.aside`
  position: fixed;
  z-index: 3000;
  width: 100%;
  height: 100%;
  background: #000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: .2s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
  color: #FFF;
`

export const Icon = styled.div`
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const DropMenuWrapper = styled.div`
  color: #FFF;
`

export const DropMenuList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 150px);
  text-align: center;

  @media screen and (max-width: 1200px){
    grid-template-rows: repeat(4, 100px);
  }
`

export const DropMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: .2s ease-in-out;
  text-decoration: none;
  color: #FFF;
  cursor: pointer;

  &:hover{
    font-size: 2rem;
    color: #d1cfcf;
    transition: .2s ease-in-out;
  }
`