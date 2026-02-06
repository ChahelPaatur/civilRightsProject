import React, { useEffect, useRef } from 'react';
import './Organizations.css';

const Organizations = () => {
  const cardsRef = useRef([]);

  const organizations = [
    {
      name: 'Black Lives Matter (BLM)',
      description: 'Works to fight police brutality, systemic racism, and violence against Black communities through protests and advocacy. Started in 2013, BLM has grown into a worldwide movement for racial justice.'
    },
    {
      name: 'NAACP',
      description: 'The National Association for the Advancement of Colored People focuses on voting rights, criminal justice reform, economic oportunity, and equal education. Founded in 1909, its one of the oldest civil rights organizations in America.'
    },
    {
      name: 'National Urban League',
      description: 'Works on economic empowerment, education, housing, and healthcare problems in African American communities. They provide direct services and advocate for change through various programs.'
    },
    {
      name: 'Color of Change',
      description: 'Focuses on ending practices that unfairly target Black people using online campaigns and political advocacy. They use digital organizing to get millions of people involved in fighting for racial justice.'
    },
    {
      name: 'Equal Justice Initiative',
      description: 'Works to end mass incarceration and racial injustice in the criminal justice system. They provide legal help and create educational projects about racial history in America.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
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
    <section id="organizations" className="organizations">
      <h2>Key Organizations</h2>
      <p className="subtitle">Groups and movements leading the fight for civil rights and equality today</p>
      
      <div className="org-grid">
        {organizations.map((org, index) => (
          <div 
            key={index} 
            className="org-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card-shine"></div>
            <h3>{org.name}</h3>
            <p>{org.description}</p>
            <div className="card-corner"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Organizations;

