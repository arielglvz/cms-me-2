import React from 'react'
import { useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import './header.scss'
const Header = () => {
  const portfolioData = useSelector((state) => state.root.portfolioData);
  const firstName = portfolioData?.hero?.firstName || 'Guest';
  
  return (
    <div className='header container'>
      <p className='header__greetings'>Hello, <span className='header__name'>{firstName}</span></p>
      <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>
        <div className="header__logout">
          <p className='header__logout-text'>Logout</p>
          <Icon className="header__icon" icon="mdi:logout-variant" />
        </div>
      </Link>
    </div>
  )
}

export default Header
