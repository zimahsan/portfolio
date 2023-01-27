import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
   <div className="header__socials">
    <a href="htts://linkedin.com" target="_blank"><BsLinkedin /></a>
    <a href="htts://facebook.com" target="_blank"><BsFacebook /></a>
    <a href="htts://twitter.com" target="_blank"><FaGithubSquare /></a>
   </div>
  )
}

export default HeaderSocials