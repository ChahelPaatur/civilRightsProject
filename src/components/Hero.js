import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const fullText = 'African American Civil Rights Movement';

  useEffect(() => {
    let timeout;
    
    const initVanta = () => {
      if (!vantaEffect.current && window.VANTA && vantaRef.current) {
        try {
          vantaEffect.current = window.VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xc9a961,
            backgroundColor: 0x161818
          });
        } catch (error) {
          console.log('Vanta initialization error:', error);
        }
      }
    };

    if (window.VANTA) {
      initVanta();
    } else {
      timeout = setTimeout(initVanta, 100);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.log('Vanta cleanup error:', error);
        }
      }
    };
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToOverview = (e) => {
    e.preventDefault();
    const element = document.querySelector('#overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" ref={vantaRef} id="hero">
      <div className="hero-overlay"></div>
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div className="hero-content">
        <div className="hero-glow"></div>
        <h1 className="hero-title">
          {displayText}
          <span className="cursor-blink">|</span>
        </h1>
        <p className="hero-subtitle">A comprehensive look at the fight for justice, equality, and civil liberties from 2010 to 2025</p>
        <a href="#overview" className="cta-button" onClick={scrollToOverview}>
          <span className="button-text">Explore the Movement</span>
          <span className="button-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 3L14 10L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="button-shine"></span>
        </a>
      </div>
      
      <div className="scroll-indicator" onClick={scrollToOverview}>
        <div className="scroll-arrow"></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;

