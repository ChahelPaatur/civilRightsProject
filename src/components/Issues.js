import React, { useEffect, useRef } from 'react';
import './Issues.css';

const Issues = () => {
  const cardsRef = useRef([]);

  const issues = [
    {
      title: 'Voting Rights',
      description: 'Voter supression through strict ID laws, polling place closures, and limits on early voting and mail-in ballots make it harder for Black voters to participate in elections.'
    },
    {
      title: 'Police Brutality',
      description: 'Continued killings of unarmed Black people by police, lack of accountability and real reform even after widespread protests and demands for change.'
    },
    {
      title: 'Criminal Justice Inequality',
      description: 'Huge racial differences in arrests, sentencing, and incarceration rates. Mass incarceration continues to hurt Black communities, break up families, and limit economic oportunities.'
    },
    {
      title: 'Economic Inequality',
      description: 'Large wealth gap, lower homeownership rates, wage differences, and higher unemployment rates compared to white Americans, which keeps poverty going.'
    },
    {
      title: 'Healthcare Disparities',
      description: 'Higher rates of chronic illness, maternal mortality, and unequal access to good healthcare. The COVID-19 pandemic made these existing health problems even worse.'
    },
    {
      title: 'Educational Inequity',
      description: 'Underfunded schools in mostly Black neighborhoods, the school-to-prison pipeline, and differences in college access and graduation rates that limit oppurtunities.'
    },
    {
      title: 'Affirmative Action Rollback',
      description: 'The 2023 Supreme Court decision that banned race-conscious college admissions threatens diversity and oportunity for African American students trying to get into college.'
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
      <h2>Current Issues</h2>
      <p className="subtitle">Major challenges that African Americans are still facing today</p>
      
      <div className="issues-grid">
        {issues.map((issue, index) => (
          <div 
            key={index} 
            className="issue-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card-glow"></div>
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

