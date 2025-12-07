import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Companies from './components/Companies';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Clients />
      <Companies />
      <WhyChoose />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
