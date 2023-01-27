import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'
import {MdAlternateEmail} from 'react-icons/md'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experience"><MdWork /></a>
      <a href="#services"><RiServiceFill /></a>
      <a href="#contact"><MdAlternateEmail /></a>
    </nav>
  )
}

export default Nav