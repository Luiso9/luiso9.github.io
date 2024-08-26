import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Fade, Slide } from 'react-awesome-reveal';
import { Scrollbar } from 'smooth-scrollbar-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Cert from './components/Cert';
import Footer from './components/Footer';
import Project from './components/Project';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const scrollbarRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };

  const scrollToSection = (id) => {
    if (scrollbarRef.current) {
      const section = document.getElementById(id);
      if (section) {
        scrollbarRef.current.scrollIntoView(section, {
          offsetTop: 10, // Adjust if needed
          duration: 600 // Adjust duration
        });
      }
    }
  };

  return (
    <>
      <Scrollbar
        ref={scrollbarRef}
        damping={0.4}
        thumbMinSize={10}
        renderByPixels={false}
        alwaysShowTracks={false}
        continuousScrolling={false}
        plugins={{
          overscroll: {
            effect: 'bounce'
          }
        }}>
        <div className="bg-white transition-colors duration-500 ease-in-out dark:bg-black">
          <Header scrollToSection={scrollToSection} />
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
      </Scrollbar>
    </>
  );
}
