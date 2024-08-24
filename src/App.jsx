import React, { useState, useEffect } from 'react';
import './App.css';
import { Fade } from 'react-awesome-reveal';
import Header from './components/Header';
import Hero from './components/Hero';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode);
  };
  return (
    <>
      <Fade>
        <Header />
        <Hero />
      </Fade>
    </>
  );
}
