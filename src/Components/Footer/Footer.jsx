import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-container-form'>
          <input className='footer-container-form-name' type="text" placeholder='Name' />
          <input className='footer-container-form-mail' type="text" placeholder='Email' />
          <input className='footer-container-form-message'type="text" placeholder='Message' />
          <button className='footer-container-form-submit'>Submit</button>
        </div>
        <div className='footer-container-form-social'>
          <button className='footer-container-form-social-linkedin' href=''>LINKEDIN</button>
          <button className='footer-container-form-social-git'>GIT</button>
        </div>
        <div className='footer-container-copyright'>
            © Divya Bhatt 2024
        </div>
      </div>
    </div>
  )
}

export default Footer