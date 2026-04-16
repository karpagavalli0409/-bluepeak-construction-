import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Services from './components/services';
import WhyChooseUs from './components/whychooseus';
import VRSection from './components/vrsection';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <VRSection />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;