import React from 'react'
import Header from '../Header/Header'
import CustomCards from './CustomCards'
import Footer from '../Footer/Footer'

const CustomCardsPage = () => {
  return (
    <div className='CustomCardsPage'>
        <Header />
        <CustomCards />
        {/* <Footer /> */}
    </div>
  )
}

export default CustomCardsPage