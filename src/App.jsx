import React, { useState, useEffect } from 'react';
import './App.css';
import { Fade, Slide } from 'react-awesome-reveal';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Cert from './components/Cert';
import Footer from './components/Footer';
import Project from './components/Project';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? 'black' : 'white';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  return (
    <>
      <div className="bg-white transition-colors duration-500 ease-in-out dark:bg-black">
        <Header />
        <Fade cascade damping={0.1} triggerOnce>
          <Hero />
        </Fade>

        <Slide direction="left" triggerOnce>
          <About />
        </Slide>

        <Slide direction="right" triggerOnce>
          <Cert />
        </Slide>

        <Slide direction="left" triggerOnce>
          <Project />
        </Slide>

        <Footer />
      </div>
    </>
  );
}
