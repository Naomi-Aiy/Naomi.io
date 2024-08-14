import React from 'react';
import './About_Me.css';
import image from '../../assets/Portfolio Image.png';

const About_Me = () => {
  return (
    <div className='about' id='about-me'>
        <div className='about-image'></div>
        <div className='about-box'>
            <div className='about-box2'>
                <div className='about-content'>
                    <div className='circle'>
                        <img src={image} alt="Picture of Me" />
                    </div>
                    <div className='about-text'>
                        <h1>About Me</h1>
                        <p>My name is Naomi Anderson. I’m a Computer Science Student at Wilfrid Laurier University (pursuing a UI/UX Minor), and I enjoy creating designs in my free time whether it be 2D or 3D. ETC ETC</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About_Me;
