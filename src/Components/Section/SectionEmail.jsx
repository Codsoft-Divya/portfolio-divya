import React from 'react'
import './Section.css'

const SectionEmail = () => {
  const copyEmail = () => {
    const email ='b7divya@gmail.com';
    navigator.clipboard.writeText(email)
    .then (() => {
      alert('Email Copied To Clipboard!');
    })
    .catch(err => {
      console.error ('Failed To Copy: ', err);
    });
  }
  return (
    <div className='contact'>
        <div className='contact-container'>
            <div className='contact-container-desc'>
                Get in touch (Click to copy)
            </div>
            <div className='contact-container-mail' onClick={copyEmail}>
                b7divya@gmail.com
            </div>
        </div>
    </div>
  )
}

export default SectionEmail