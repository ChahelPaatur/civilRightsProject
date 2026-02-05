import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Organizations from './components/Organizations';
import Issues from './components/Issues';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Overview />
      <Gallery />
      <Timeline />
      <Organizations />
      <Issues />
      <Footer />
    </div>
  );
}

export default App;

