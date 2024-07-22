import React from 'react';
import './Header.css';
import TypeWriter from './TypeWriter';

const Hero = () => {
  const text = 'Design: Product, Interfaces, Systems, Strategy, UX, and More.';

  return (
    <div className='hero'>
      <div className='hero-container'>
        <TypeWriter text={text} speed={100} />
      </div>
    </div>
  );
};

export default Hero;