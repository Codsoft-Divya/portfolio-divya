import React from 'react'
import Header from '../Header/Header'
import Hero from '../Header/Hero'
import SectionAbout from '../Section/SectionAbout'
import SectionEmail from '../Section/SectionEmail'
import Footer from '../Footer/Footer'
import SectionProjects from '../Section/SectionProjects'

const Compilation = () => {
  return (
    <div className='compilation'>
        <Header />
        <Hero />
        <SectionProjects />
        <SectionAbout />
        <SectionEmail />
        <Footer />
    </div>
  )
}

export default Compilation