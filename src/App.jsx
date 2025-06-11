import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Attorneys from './components/Attorneys';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PracticeAreas />
      <Attorneys />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;