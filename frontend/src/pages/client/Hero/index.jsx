import React from 'react'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './hero.scss'

const Hero = () => {
  const socials = [
    {
      label: 'github',
      link: 'https://github.com/arielglvz'
    },
    {
      label: 'linkedin',
      link: 'https://www.linkedin.com/in/arielglvz/'
    },
    {
      label: 'gmail',
      link: 'arielglvz@gmail.com'
    },
  ]

  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div className='hero container'>
      <nav className='hero__nav'>
        <p className='year'>&copy; 2025</p>
        <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
          <div className="back-to-top">
            <p className='bold'>EDIT PORTFOLIO</p>
            <Icon className="icon" icon="mdi:view-dashboard-edit" />
          </div>
        </Link>
      </nav>
      <div className='hero__text'>
        <p className='subtitle'>HAVE A PROJECT IN MIND?</p>
        <h1 className='title'>LET&apos;S TALK</h1>
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
          <p className="developed-by">Developed by <span className='bold'>Ariel Galvez</span></p>
        </div>
      </div>
    </div>
  )
}

export default Hero
