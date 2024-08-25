import React, { useState, useEffect } from 'react';
import './App.css';
import { Fade, Slide } from 'react-awesome-reveal';
import {RemoveScrollBar} from 'react-remove-scroll-bar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';

export function App() {
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
    
      <Fade
        cascade
        damping={0.1}
        triggerOnce
        className="bg-white transition-colors duration-500 ease-in-out dark:bg-black">
        <Header />
        <Hero />
      </Fade>

      <Fade direction="left" triggerOnce>
        <About />  
      </Fade>
    </>
  );
}
