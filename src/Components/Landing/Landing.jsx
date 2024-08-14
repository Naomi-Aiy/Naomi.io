import React from 'react';
import './Landing.css';
import Circles from '../Circles/Circles.jsx';
import Stars from '../Stars/Stars.jsx';
import resume from '../../assets/Naomi A Resume.pdf';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-image'></div>
      <div className='hero-text'>
        <h2>Hello, My Name Is</h2>
        <h1>Naomi Anderson</h1>
        <p>UX & UI Designer · Software Developer · Graphic Designer</p>
        <a href={resume} download="Naomi_A_Resume.pdf" className='btn1'>
          Download Resume
        </a>
        <a href="mailto:your-email@example.com">
            <button className='btn2'>Let's Talk</button>
        </a>
        <Circles/>
        <Stars top="50px" left="100px" />
      </div>
    </div>
  );
}

export default Hero;
