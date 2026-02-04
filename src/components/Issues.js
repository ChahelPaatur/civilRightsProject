import React, { useEffect, useRef } from 'react';
import './Issues.css';

const Issues = () => {
  const cardsRef = useRef([]);

  const issues = [
    {
      icon: '🗳️',
      title: 'Voting Rights',
      description: 'Voter suppression through strict ID laws, polling place closures, and restrictions on early voting and mail-in ballots disproportionately affect Black voters, undermining democratic participation.'
    },
    {
      icon: '⚖️',
      title: 'Police Brutality',
      description: 'Continued killings of unarmed Black individuals by law enforcement, lack of police accountability and meaningful reform despite widespread protests and demands for change.'
    },
    {
      icon: '🔗',
      title: 'Criminal Justice Inequality',
      description: 'Racial disparities in arrests, sentencing, and incarceration rates. Mass incarceration continues to devastate Black communities, families, and economic opportunities.'
    },
    {
      icon: '💰',
      title: 'Economic Inequality',
      description: 'Persistent wealth gap, lower homeownership rates, wage disparities, and higher unemployment rates compared to white Americans, perpetuating cycles of poverty.'
    },
    {
      icon: '🏥',
      title: 'Healthcare Disparities',
      description: 'Higher rates of chronic illness, maternal mortality, and unequal access to quality healthcare. COVID-19 pandemic highlighted and exacerbated existing health inequities.'
    },
    {
      icon: '📚',
      title: 'Educational Inequity',
      description: 'Underfunded schools in predominantly Black neighborhoods, school-to-prison pipeline, and disparities in college access and completion rates limit opportunities.'
    },
    {
      icon: '🎓',
      title: 'Affirmative Action Rollback',
      description: 'The 2023 Supreme Court decision banning race-conscious college admissions threatens diversity and opportunity for African American students in higher education.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="issues">
      <div className="feature-image feature-image-3">
        <img src="/pics/IMG_4267.jpeg" alt="Current Issues" />
        <div className="image-frame"></div>
      </div>
      
      <h2>Current Issues</h2>
      <p className="subtitle">The critical challenges facing African Americans today</p>
      
      <div className="issues-grid">
        {issues.map((issue, index) => (
          <div 
            key={index} 
            className="issue-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card-glow"></div>
            <span className="issue-icon">{issue.icon}</span>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <div className="card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Issues;

