import React, { useEffect, useRef, useState } from 'react';
import Modal from './Modal';
import './Timeline.css';

const Timeline = () => {
  const timelineRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      date: 'June 25, 2013',
      title: 'Shelby County v. Holder',
      description: 'Supreme Court struck down key Voting Rights Act provisions, weakening federal oversight of discriminatory voting laws.',
      fullContent: 'The Supreme Court struck down key Voting Rights Act provisions, weakening federal oversight of discriminatory voting laws and impacting protections that were hard-won through civil rights struggles. This decision removed the requirement for certain states with histories of discrimination to obtain federal approval before changing voting laws.'
    },
    {
      date: 'July 2013',
      title: 'Black Lives Matter Founded',
      description: "Movement created after Trayvon Martin's killer was acquitted, becoming a major force against police brutality.",
      fullContent: "Movement created after Trayvon Martin's killer was acquitted, becoming a major force against police brutality and systemic racism across the nation. Founded by Alicia Garza, Patrisse Cullors, and Opal Tometi, BLM grew into a global movement demanding justice and accountability."
    },
    {
      date: 'August 2014',
      title: 'Ferguson Protests',
      description: "Michael Brown's killing by police sparked sustained protests and national debate on policing in Black communities.",
      fullContent: "Michael Brown's killing by police sparked sustained protests and national debate on policing in Black communities, highlighting ongoing issues with police accountability. The protests in Ferguson, Missouri, drew international attention to police violence and led to calls for comprehensive police reform."
    },
    {
      date: 'June 17, 2015',
      title: 'Charleston Church Shooting',
      description: 'White supremacist killed nine Black parishioners at Emanuel AME Church, reigniting debates about racism.',
      fullContent: 'White supremacist killed nine Black parishioners at Emanuel AME Church, reigniting debates about racism and Confederate symbols in American society. This tragedy brought renewed focus to white supremacy and domestic terrorism, leading to the removal of Confederate symbols in many states.'
    },
    {
      date: 'August 2016',
      title: 'Colin Kaepernick Kneels',
      description: 'NFL player began kneeling during the national anthem to protest police brutality.',
      fullContent: 'NFL player began kneeling during the national anthem to protest police brutality, sparking nationwide controversy and inspiring athlete activism for social justice. His peaceful protest became a powerful symbol of resistance and inspired athletes across all sports to use their platforms for social change.'
    },
    {
      date: 'March 13, 2020',
      title: 'Breonna Taylor Killing',
      description: 'Taylor\'s death during a police raid became a rallying cry for police reform and the "Say Her Name" movement.',
      fullContent: 'Taylor\'s death during a police raid became a rallying cry for police reform and the "Say Her Name" movement, emphasizing the impact of police violence on Black women. Her case highlighted the need for banning no-knock warrants and greater accountability for police misconduct.'
    },
    {
      date: 'May 25, 2020',
      title: 'George Floyd Murder',
      description: "Floyd's murder by police officer sparked the largest civil rights protests in U.S. history.",
      fullContent: "Floyd's murder by police officer Derek Chauvin sparked the largest civil rights protests in U.S. history, with demonstrations occurring across all 50 states and globally. His death became a watershed moment, leading to widespread demands for police reform, defunding, and accountability measures."
    },
    {
      date: 'April 20, 2021',
      title: 'Derek Chauvin Convicted',
      description: 'Former officer found guilty of murdering George Floyd, marking a rare police accountability victory.',
      fullContent: 'Former officer found guilty of murdering George Floyd, marking a rare police accountability victory and setting a significant legal precedent. The conviction was seen as a historic moment in the fight for police accountability, though activists emphasized the need for systemic change beyond individual prosecutions.'
    },
    {
      date: 'June 17, 2021',
      title: 'Juneteenth Becomes Federal Holiday',
      description: 'Congress passed legislation making Juneteenth a federal holiday commemorating the end of slavery.',
      fullContent: 'Congress passed and President Biden signed legislation making Juneteenth a federal holiday commemorating the end of slavery in the United States. This recognition honored a long-standing celebration in African American communities marking June 19, 1865, when enslaved people in Texas finally learned of their freedom.'
    },
    {
      date: 'June 29, 2023',
      title: 'Affirmative Action Banned',
      description: 'Supreme Court ruled race-conscious college admissions unconstitutional, ending decades of policy.',
      fullContent: 'Supreme Court ruled race-conscious college admissions unconstitutional in Students for Fair Admissions v. Harvard, ending decades of affirmative action policy. This decision significantly impacted diversity efforts in higher education and sparked debates about alternative approaches to achieving equitable access to educational opportunities.'
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <section id="timeline" className="timeline">
      <div className="timeline-particles">
        <div className="timeline-particle"></div>
        <div className="timeline-particle"></div>
        <div className="timeline-particle"></div>
      </div>
      
      <div className="feature-image feature-image-4">
        <img src="/pics/IMG_4268.JPG" alt="Timeline" />
        <div className="image-borders">
          <div className="border-corner border-tl"></div>
          <div className="border-corner border-tr"></div>
          <div className="border-corner border-bl"></div>
          <div className="border-corner border-br"></div>
        </div>
      </div>
      
      <h2>Timeline of Events</h2>
      <p className="subtitle">Key landmarks in the African American civil rights movement from 2010-2025</p>
      
      <div className="timeline-container" ref={timelineRef}>
        {events.map((event, index) => (
          <div key={index} className="timeline-item" onClick={() => setSelectedEvent(event)}>
            <div className="timeline-connector"></div>
            <span className="timeline-date">{event.date}</span>
            <div className="timeline-content">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="read-more">
                <span>Read More</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
        content={selectedEvent?.fullContent}
        date={selectedEvent?.date}
      />
    </section>
  );
};

export default Timeline;

