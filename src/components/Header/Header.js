import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Link as AnchorLink } from 'react-scroll';

import { slide as Menu } from 'react-burger-menu'
import { Icon } from 'react-mdl'

import Radium from 'radium'
let RadiumLink = Radium(Link)
let RadiumIndexLink = Radium(IndexLink)


import './Header.scss'

export const Header = (props) => {

  var menuStyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#BFBFBF'
    },
    bmMenu: {
      background: '#373a47',
      boxShadow: '10px 0px 20px -10px rgba(0,0,0,0.4)',
      padding: '60px 1.5em 0'
    },
    bmCross: {
      background: '#b8b7ad'
    }
  }

  return (
  <Menu right noOverlay id={"menu"} className="menu" styles={ menuStyles }>
    <RadiumLink to='/#home' className="button">
      <Icon name="favorite_border" className="icon" /> Home
    </RadiumLink>

    <RadiumLink to='/#about' className="button">
      <Icon name="face" className="icon" /> About
    </RadiumLink>

    <RadiumLink to='/#presta' className="button">
      <Icon name="brush" className="icon" /> Presta
    </RadiumLink>

    <RadiumLink to='/#skills' className="button">
      <Icon name="computer" className="icon" /> Skills
    </RadiumLink>

    <RadiumLink to='/#portfolio' className="button">
      <Icon name="photo_library" className="icon" /> Portfolio
    </RadiumLink>

    {/* <RadiumLink to='/counter' className="button">
      <Icon name="mode_edit" className="icon" /> Blog
    </RadiumLink> */}

    <RadiumLink to='/#contact' className="button">
      <Icon name="free_breakfast" className="icon" /> Contact
    </RadiumLink>
  </Menu>
  )
}

export default Header
