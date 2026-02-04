import React, { useEffect, useRef } from 'react';
import './Organizations.css';

const Organizations = () => {
  const cardsRef = useRef([]);

  const organizations = [
    {
      name: 'Black Lives Matter (BLM)',
      description: 'Focuses on combating police brutality, systemic racism, and violence against Black communities through protest and advocacy. Founded in 2013, BLM has become a global movement for racial justice.',
      icon: '✊'
    },
    {
      name: 'NAACP',
      description: 'National Association for the Advancement of Colored People works on voting rights, criminal justice reform, economic opportunity, and educational equity. Founded in 1909, it remains one of the oldest civil rights organizations.',
      icon: '⚖️'
    },
    {
      name: 'National Urban League',
      description: 'Addresses economic empowerment, education, housing, and healthcare disparities in African American communities through direct services and advocacy programs.',
      icon: '🏛️'
    },
    {
      name: 'Color of Change',
      description: 'Focuses on ending practices that unfairly target Black people through online campaigns and political advocacy. Uses digital organizing to mobilize millions for racial justice.',
      icon: '📢'
    },
    {
      name: 'Equal Justice Initiative',
      description: 'Works to end mass incarceration and racial injustice, particularly in the criminal justice system. Provides legal representation and creates public education projects about racial history.',
      icon: '⚡'
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
      <div className="feature-image feature-image-2">
        <img src="/pics/IMG_4266.jpeg" alt="Organizations" />
        <div className="image-glow"></div>
      </div>
      
      <h2>Key Organizations</h2>
      <p className="subtitle">Groups and movements leading the fight for civil rights and equality</p>
      
      <div className="org-grid">
        {organizations.map((org, index) => (
          <div 
            key={index} 
            className="org-card"
            ref={(el) => (cardsRef.current[index] = el)}
          >
            <div className="card-shine"></div>
            <div className="org-icon">{org.icon}</div>
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

