import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <div className="header-container">
          <Link to='/'>
            <div className="header-container-left">
                Divya Bhatt
            </div>
          </Link>
          <Link to='/about'>
            <div className="header-container-right">
                About
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Header