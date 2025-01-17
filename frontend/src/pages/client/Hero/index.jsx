import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './hero.scss'

const Hero = () => {
  const { portfolioData } = useSelector((state) => state.root); 

if (!portfolioData) { 
  return <div>Loading...</div>; 
} if (!portfolioData.hero) { 
  return <div>Failed to load hero data. Please try again later.</div>; 
} 
  const { hero } = portfolioData; 
  const { _id, welcomeText, caption, firstName, lastName, socials, yearCreated } = hero;
  
  return (
    <div className='hero container'>
      <nav className='hero__nav'>
        <p className='year'>&copy; {yearCreated}</p>
        <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
          <div className="hero__back-to-top">
            <p>LOGIN</p>
            <Icon className="hero__icon" icon="mdi:account-box-edit-outline" />
          </div>
        </Link>
      </nav>
      <div className='hero__text'>
        <p className='subtitle'>{welcomeText}</p>
        <h1 className='title'>{caption}</h1>
      </div>
      <div className="hero__bottom">
        <div className="hero__connect">
          {socials.map((social) => (
            <div className='btn' key={social.label}>
              <p className='bold'>{social.label}</p>
            </div>
          ))}
        </div>
        <div className="hero__creators">
          <p className='designed-by'>Designed by <span className='bold'>The Avgxy Design Studio</span></p>
          <p className="developed-by">Developed by <span className='bold'>{`${firstName} ${lastName}`}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
