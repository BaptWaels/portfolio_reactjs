import React from 'react'
import { IndexLink, Link } from 'react-router'

import { slide as Menu } from 'react-burger-menu'
import { Icon } from 'react-mdl'

import Radium from 'radium'
let RadiumLink = Radium(Link)
let RadiumIndexLink = Radium(IndexLink)


import './Header.scss'

export const Header = () => {
  let active = 'home';

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
    <RadiumIndexLink to='/' className="demo-buttons" activeClassName='route--active'>
      <Icon name="favorite_border" className="icon" /> Home
    </RadiumIndexLink>

    <RadiumLink to='/counter' className="demo-buttons" activeClassName='route--active'>
      <Icon name="face" className="icon" /> About
    </RadiumLink>

    <RadiumLink to='/projects' className="demo-buttons" activeClassName='route--active'>
      <Icon name="computer" className="icon" /> Projects
    </RadiumLink>

    <RadiumLink to='/projects' className="demo-buttons" activeClassName='route--active'>
      <Icon name="folder_open" className="icon" /> Resume
    </RadiumLink>
  </Menu>
  )
}

export default Header
