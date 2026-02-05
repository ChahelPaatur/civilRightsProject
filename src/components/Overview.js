import React, { useEffect, useRef, useState } from 'react';
import './Overview.css';

const Overview = () => {
  const [stats, setStats] = useState([
    { number: 0, target: 10, description: 'Major Civil Rights Events (2010-2025)', suffix: '' },
    { number: 0, target: 5, description: 'Key Organizations Fighting for Justice', suffix: '+' },
    { number: 0, target: 7, description: 'Critical Current Issues', suffix: '' },
    { number: 0, target: 2020, description: 'Largest Civil Rights Protests in U.S. History', suffix: '' }
  ]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      const increment = stat.target / 100;
      const duration = 2000;
      const steps = 100;
      const stepDuration = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }

        setStats((prevStats) => {
          const newStats = [...prevStats];
          newStats[index] = { ...newStats[index], number: Math.floor(current) };
          return newStats;
        });
      }, stepDuration);
    });
  };

  return (
    <section id="overview" className="overview" ref={sectionRef}>
      <div className="section-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
      
      <h2>The Ongoing Struggle</h2>
      <p className="subtitle">Understanding the denial of rights and the continued fight for equality</p>
      
      <div className="overview-content">
        <div className="overview-text">
          <p>
            African Americans have historically faced and continue to face systemic discrimination and denial of{' '}
            <span className="vocab-badge">Civil Liberties</span> and <span className="vocab-badge">Civil Rights</span>. 
            Despite constitutional protections including the <span className="vocab-badge">14th Amendment</span> guaranteeing{' '}
            <span className="vocab-badge">Due Process</span>, and landmark legislation such as the{' '}
            <span className="vocab-badge">Civil Rights Act</span> and <span className="vocab-badge">Voting Rights Act</span>, 
            African Americans continue to experience ongoing challenges.
          </p>
          <br />
          <p>
            These challenges include voting restrictions, police brutality, unequal criminal justice outcomes, economic disparities, 
            housing discrimination, educational inequities, and unequal access to healthcare. Despite progress through{' '}
            <span className="vocab-badge">Affirmative Action</span> policies, the movement continues to fight against 
            higher rates of police violence, mass incarceration, and barriers to voting through voter ID laws and polling place closures.
          </p>
        </div>
        
        <div className="overview-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="stat-icon">
                <div className="icon-pulse"></div>
              </div>
              <h3>{stat.number}{stat.suffix}</h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;

