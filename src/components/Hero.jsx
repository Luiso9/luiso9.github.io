import React, { useState, useEffect } from 'react';

function Hero() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsFading(true);

    setTimeout(() => {
      setIsDarkMode(!isDarkMode);
      localStorage.setItem('darkMode', !isDarkMode);
      setIsFading(false);
    }, 300); // Adjust timing to match the duration of the fade effect
  };

  return (
    <>
      <section id="hero" className="hero">
        <div
          className={`mx-auto flex w-full bg-cover bg-right pt-12 transition-opacity duration-300 md:items-center md:pt-0 ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            maxWidth: '1600px',
            height: '32rem',
            backgroundImage:
              "url('https://images.unsplash.com/photo-1718081591976-64a345c4f92e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}>
          <div className="container mx-auto">
            <div className="flex w-full flex-col items-start justify-center px-6 tracking-wide lg:w-1/2">
              <h1 className="my-4 text-2xl text-white transition-colors duration-500 ease-in-out dark:text-white">
                Hello, I am Muhammad Andrian Saputra
              </h1>
              <a
                className="inline-block border-b border-gray-600 text-xl leading-relaxed text-white no-underline transition-colors duration-500 ease-in-out hover:border-black hover:text-black dark:border-gray-300 dark:hover:border-white dark:hover:text-white"
                href="#about">
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
