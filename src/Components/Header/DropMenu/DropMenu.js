import React from 'react'
// import {ReactComponent as Logo} from '../../../Img/logo-stamp.svg';
import {DropMenuContainer, Icon, CloseIcon, DropMenuWrapper, DropMenuList, DropMenuLink} from './DropMenuEl'

const DropMenu = ({isOpen, toggle}) => {
  return (
    <DropMenuContainer isOpen={isOpen} onClick={toggle }>
      {/* <DropMenuLink className='nav-logo' to='/'>
        <Logo alt='Brand Logo' />
      </DropMenuLink> */}
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropMenuWrapper>
        <DropMenuList>
          <DropMenuLink to='/'>Home</DropMenuLink>
          <DropMenuLink to='/about'>About</DropMenuLink>
          <DropMenuLink to='/projects'>Projects</DropMenuLink>
          <DropMenuLink to='/contact'>Contact</DropMenuLink>
        </DropMenuList>
      </DropMenuWrapper>
    </DropMenuContainer>
  )
}

export default DropMenu
