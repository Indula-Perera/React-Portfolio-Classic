import React, { useState, useEffect } from 'react';
import { RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    const animateCount = (targetCount, setter) => {
      let start = 0;
      const step = Math.ceil(targetCount / 50); // Adjust the step based on the targetCount
      const duration = 1000; // Set the duration of the animation (in milliseconds)

      const animate = () => {
        if (start < targetCount) {
          setter(start);
          start += step;
          requestAnimationFrame(animate);
        } else {
          setter(targetCount);
        }
      };

      animate();
    };

    animateCount(21, setCount1);
    animateCount(3, setCount2);
    animateCount(100, setCount3);
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <RiCupLine className='about__icon' />

        <div>
          <h3 className="about__title">{count1}+</h3>
          <span className="about__subtitle">Github Repositories</span>
        </div>
      </div>

      <div className="about__box">
        <RiGroupLine className='about__icon' />

        <div>
          <h3 className="about__title">{count2}</h3>
          <span className="about__subtitle">Launched Projects</span>
        </div>
      </div>

      <div className="about__box">
        <RiTrophyLine className='about__icon' />

        <div>
          <h3 className="about__title">{count3}%</h3>
          <span className="about__subtitle">Code Quality</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
