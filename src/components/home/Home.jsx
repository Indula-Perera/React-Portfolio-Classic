// Home.js
import React from 'react';
import './Home.css';
import Me from '../../assets/avatar-4.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import TypingText from './TypingText';

const Home = () => {
  const messages = [
    "'m a Software Engineer",
    "love coding",
    "Passionate about web development",
    "love Design",
    "love Photography",
  ];

  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" className='home__img' width='120' />
        <h1 className="home__name">Indula Perera</h1>
        
        {/* Use TypingText component for the looping typing effect */}
        <TypingText messages= {messages} />

        <HeaderSocials />

        <a href="#contact" className="btn"> Contact Me</a>

        <ScrollDown />
      </div>

     <Shapes isVisible={true}/>
    </section>
    
  );
};

export default Home;
