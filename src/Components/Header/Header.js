import React, { useState } from 'react'
import FullMenu from './FullMenu/FullMenu'
import DropMenu from './DropMenu/DropMenu'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <DropMenu isOpen={isOpen} toggle={toggle} />
      <FullMenu toggle={toggle} />
    </>
  )
}

export default Header
