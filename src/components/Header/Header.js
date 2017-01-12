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

  const isActive = (val) => {
    if((props.location.pathname === '/' && props.location.hash === '' )|| props.location.hash.split('#')[1] === val){
      return ' route--active';
    }

    return '';
  }

  const isActiveRoute = (val) => {
    if(props.location.pathname.split('/')[1] === val){
      return ' route--active';
    }

    return '';
  }

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
    <RadiumLink to='/#home' className={"button" + isActive('home')}>
      <Icon name="favorite_border" className="icon" /> Home
    </RadiumLink>

    <RadiumLink to='/#about' className={"button" + isActive('about')}>
      <Icon name="face" className="icon" /> About
    </RadiumLink>

    <RadiumLink to='/counter' className={"button" + isActiveRoute('counter')}>
      <Icon name="computer" className="icon" /> Projects
    </RadiumLink>
  </Menu>
  )
}

export default Header
