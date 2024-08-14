import React, { useState } from 'react';
import './projects.css'; // Assuming you have CSS for your slider
import SlideImage4 from '../../assets/slides/Slide 16_9 - 4.png';
import SlideImage5 from '../../assets/slides/Slide 16_9 - 5.png';
import SlideImage6 from '../../assets/slides/Slide 16_9 - 6.png';
import SlideImage7 from '../../assets/slides/Slide 16_9 - 7.png';
import SlideImage8 from '../../assets/slides/Slide 16_9 - 8.png';
import SlideImage9 from '../../assets/slides/Slide 16_9 - 9.png';
import SlideImage10 from '../../assets/slides/Slide 16_9 - 10.png';
import SlideImage11 from '../../assets/slides/Slide 16_9 - 11.png';
import SlideImage12 from '../../assets/slides/Slide 16_9 - 12.png';
import SlideImage13 from '../../assets/slides/Slide 16_9 - 13.png';
import SlideImage14 from '../../assets/slides/Slide 16_9 - 14.png';
import SlideImage15 from '../../assets/slides/Slide 16_9 - 15.png';
import SlideImage16 from '../../assets/slides/Slide 16_9 - 16.png';
import SlideImage17 from '../../assets/slides/Slide 16_9 - 17.png';
import SlideImage18 from '../../assets/slides/Slide 16_9 - 18.png';
import SlideImage19 from '../../assets/slides/Slide 16_9 - 19.png';
import SlideImage20 from '../../assets/slides/Slide 16_9 - 20.png';
import SlideImage21 from '../../assets/slides/Slide 16_9 - 21.png';
import SlideImage22 from '../../assets/slides/Slide 16_9 - 22.png';
import SlideImage23 from '../../assets/slides/Slide 16_9 - 23.png';
import SlideImage24 from '../../assets/slides/Slide 16_9 - 24.png';
import SlideImage25 from '../../assets/slides/Slide 16_9 - 25.png';
import SlideImage26 from '../../assets/slides/Slide 16_9 - 26.png';
import SlideImage27 from '../../assets/slides/Slide 16_9 - 27.png';
import SlideImage28 from '../../assets/slides/Slide 16_9 - 28.png';
import SlideImage29 from '../../assets/slides/Slide 16_9 - 29.png';
import SlideImage30 from '../../assets/slides/Slide 16_9 - 30.png';
import SlideImage31 from '../../assets/slides/Slide 16_9 - 31.png';
import SlideImage32 from '../../assets/slides/Slide 16_9 - 32.png';
import SlideImage33 from '../../assets/slides/Slide 16_9 - 33.png';
import SlideImage34 from '../../assets/slides/Slide 16_9 - 34.png';
import SlideImage35 from '../../assets/slides/Slide 16_9 - 35.png';
import SlideImage36 from '../../assets/slides/Slide 16_9 - 36.png';
import SlideImage37 from '../../assets/slides/Slide 16_9 - 37.png';
import SlideImage38 from '../../assets/slides/Slide 16_9 - 38.png';
import SlideImage39 from '../../assets/slides/Slide 16_9 - 39.png';
import SlideImage40 from '../../assets/slides/Slide 16_9 - 40.png';
import SlideImage41 from '../../assets/slides/Slide 16_9 - 41.png';
import SlideImage42 from '../../assets/slides/Slide 16_9 - 42.png';


const Projects = () => {
  const [selectedSlide, setSelectedSlide] = useState('slide1');

  return (
    <section class="container" id='projects'>
		<h2>Projects</h2>
	<div class="slider-wrapper">
		<div class="slider">

			
		<img id="slide-1" src={SlideImage4} alt="Slide 16:9" />
<img id="slide-2" src={SlideImage5} alt="Slide 16:9" />
<img id="slide-3" src={SlideImage6} alt="Slide 16:9" />
<img id="slide-4" src={SlideImage7} alt="Slide 16:9" />
<img id="slide-5" src={SlideImage8} alt="Slide 16:9" />
<img id="slide-6" src={SlideImage9} alt="Slide 16:9" />
<img id="slide-7" src={SlideImage10} alt="Slide 16:9" />
<img id="slide-8" src={SlideImage11} alt="Slide 16:9" />
<img id="slide-9" src={SlideImage12} alt="Slide 16:9" />
<img id="slide-10" src={SlideImage13} alt="Slide 16:9" />
<img id="slide-11" src={SlideImage14} alt="Slide 16:9" />
<img id="slide-12" src={SlideImage15} alt="Slide 16:9" />
<img id="slide-13" src={SlideImage16} alt="Slide 16:9" />
<img id="slide-14" src={SlideImage17} alt="Slide 16:9" />
<img id="slide-15" src={SlideImage18} alt="Slide 16:9" />
<img id="slide-16" src={SlideImage19} alt="Slide 16:9" />
<img id="slide-17" src={SlideImage20} alt="Slide 16:9" />
<img id="slide-18" src={SlideImage21} alt="Slide 16:9" />
<img id="slide-19" src={SlideImage22} alt="Slide 16:9" />
<img id="slide-20" src={SlideImage23} alt="Slide 16:9" />
<img id="slide-21" src={SlideImage24} alt="Slide 16:9" />
<img id="slide-22" src={SlideImage25} alt="Slide 16:9" />
<img id="slide-23" src={SlideImage26} alt="Slide 16:9" />
<img id="slide-24" src={SlideImage27} alt="Slide 16:9" />
<img id="slide-25" src={SlideImage28} alt="Slide 16:9" />
<img id="slide-26" src={SlideImage29} alt="Slide 16:9" />
<img id="slide-27" src={SlideImage30} alt="Slide 16:9" />
<img id="slide-28" src={SlideImage31} alt="Slide 16:9" />
<img id="slide-29" src={SlideImage32} alt="Slide 16:9" />
<img id="slide-30" src={SlideImage33} alt="Slide 16:9" />
<img id="slide-31" src={SlideImage34} alt="Slide 16:9" />
<img id="slide-32" src={SlideImage35} alt="Slide 16:9" />
<img id="slide-33" src={SlideImage36} alt="Slide 16:9" />
<img id="slide-34" src={SlideImage37} alt="Slide 16:9" />
<img id="slide-35" src={SlideImage38} alt="Slide 16:9" />
<img id="slide-36" src={SlideImage39} alt="Slide 16:9" />
<img id="slide-37" src={SlideImage40} alt="Slide 16:9" />
<img id="slide-38" src={SlideImage41} alt="Slide 16:9" />
<img id="slide-39" src={SlideImage42} alt="Slide 16:9" />
		</div>

		<div class="slider-nav">
    <a href="#slide-1"></a>
    <a href="#slide-2"></a>
    <a href="#slide-3"></a>
    <a href="#slide-4"></a>
    <a href="#slide-5"></a>
    <a href="#slide-6"></a>
    <a href="#slide-7"></a>
    <a href="#slide-8"></a>
    <a href="#slide-9"></a>
    <a href="#slide-10"></a>
    <a href="#slide-11"></a>
    <a href="#slide-12"></a>
    <a href="#slide-13"></a>
    <a href="#slide-14"></a>
    <a href="#slide-15"></a>
    <a href="#slide-16"></a>
    <a href="#slide-17"></a>
    <a href="#slide-18"></a>
    <a href="#slide-19"></a>
    <a href="#slide-20"></a>
    <a href="#slide-21"></a>
    <a href="#slide-22"></a>
    <a href="#slide-23"></a>
    <a href="#slide-24"></a>
    <a href="#slide-25"></a>
    <a href="#slide-26"></a>
    <a href="#slide-27"></a>
    <a href="#slide-28"></a>
    <a href="#slide-29"></a>
    <a href="#slide-30"></a>
    <a href="#slide-31"></a>
    <a href="#slide-32"></a>
    <a href="#slide-33"></a>
    <a href="#slide-34"></a>
    <a href="#slide-35"></a>
    <a href="#slide-36"></a>
    <a href="#slide-37"></a>
    <a href="#slide-38"></a>
    <a href="#slide-39"></a>
    <a href="#slide-40"></a>
  
</div>
	</div>
</section>
  );
};

export default Projects;
