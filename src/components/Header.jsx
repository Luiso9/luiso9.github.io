import React, { useState, useEffect } from 'react';


function Header() {
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
      <nav
        id="header"
        className="top-0 z-30 w-full bg-white py-1 transition-colors duration-500 ease-in-out dark:bg-black">
        <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-3">
          <label htmlFor="menu-toggle" className="block cursor-pointer md:hidden">
            <svg
              className="fill-current text-gray-900 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div
            className="order-3 hidden w-full md:order-1 md:flex md:w-auto md:items-center"
            id="menu">
            <nav>
              <ul className="items-center justify-between pt-4 text-base text-gray-700 transition-colors duration-500 ease-in-out dark:text-gray-300 md:flex md:pt-0">
                <li>
                  <a
                    className="inline-block py-2 no-underline hover:text-black hover:underline dark:hover:text-white"
                    href="#">
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="ml-4 inline-block py-2 no-underline hover:text-black hover:underline dark:hover:text-white"
                    href="#">
                    Certificate
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-1 md:order-2">
            <a
              className="flex items-center justify-center text-xl font-bold tracking-wide text-gray-800 no-underline transition-colors duration-500 ease-in-out hover:no-underline dark:text-gray-200"
              href="#">
              PORTFOLIO
            </a>
          </div>

          <div className="order-2 flex items-center justify-center md:order-3" id="nav-content">
            <button
              onClick={toggleDarkMode}
              className="inline-block no-underline transition-colors duration-500 ease-in-out hover:text-black focus:outline-none dark:hover:text-white">
              {isDarkMode ? (
                // Moon icon for dark mode
                <svg
                  className="fill-current text-gray-900 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M12 2a9.93 9.93 0 0 0-6.944 2.9 1 1 0 0 0 1.146 1.635A7.96 7.96 0 1 1 10.466 19.8a1 1 0 0 0-1.635 1.145A9.93 9.93 0 1 0 12 2z" />
                </svg>
              ) : (
                // Sun icon for light mode
                <svg
                  className="fill-current text-gray-900 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24">
                  <path d="M6.76 4.84l-1.8-1.8a1 1 0 1 1 1.42-1.42l1.8 1.8a1 1 0 0 1-1.42 1.42zm10.48 0a1 1 0 0 1-1.42-1.42l1.8-1.8a1 1 0 0 1 1.42 1.42l-1.8 1.8zm-7.6 14.32a1 1 0 0 1 1.42-1.42l1.8 1.8a1 1 0 1 1-1.42 1.42l-1.8-1.8zm10.48-1.42a1 1 0 0 1 1.42 1.42l-1.8 1.8a1 1 0 1 1-1.42-1.42l-1.8-1.8zm-5.12-4.76a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm-5-3a1 1 0 0 1 0 2 1 1 0 0 1 0-2zm0 6a1 1 0 0 1 0 2 1 1 0 0 1 0-2zm-6-3a1 1 0 0 1 2 0 1 1 0 0 1-2 0zm12 0a1 1 0 0 1 2 0 1 1 0 0 1-2 0zm-9.9-6.1a1 1 0 0 1 1.42 0l1.8 1.8a1 1 0 0 1-1.42 1.42l-1.8-1.8a1 1 0 0 1 0-1.42zm10.48 10.48a1 1 0 0 1 1.42 0l1.8 1.8a1 1 0 0 1-1.42 1.42l-1.8-1.8a1 1 0 0 1 0-1.42z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
