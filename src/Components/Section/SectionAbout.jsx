import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom'

const SectionAbout = () => {
  return (
    <div className='about-homepage'>
        <div className='about-homepage-container'>
            <div className='about-homepage-container-title'>

            </div>
            <div className='about-homepage-container-desc'>
                I’m Divya, a product designer based in India with over 5 years of <br/>
                diverse experience. I specialize in crafting product interfaces, aligning<br/>
                business objectives with user needs, and overseeing comprehensive design projects.<br/>
                My passion lies in tackling diverse challenges in the dynamic design landscape.
            </div>
            <div className='about-homepage-container-more'>
              <Link to='/about'>
                More About Me
              </Link>
            </div>
        </div>
    </div>
  )
}

export default SectionAbout