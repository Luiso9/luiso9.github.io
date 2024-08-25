import React, { useState, useEffect } from 'react';

function About() {
  return (
    <>
      <div
        id="about"
        className="max-w-full overflow-hidden bg-white py-20 transition-colors duration-500 ease-in-out dark:bg-black md:py-28">
        <div className="px-4 lg:px-20">
          <div className="mb-3 flex h-full w-full flex-col items-center justify-center">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-black transition-colors duration-500 ease-in-out dark:text-white">
              About Me
            </h2>
            <div className="my-4 h-[2px] w-12 rounded-md bg-gray-600 dark:bg-white"></div>
            <span className="w-11/12 text-center text-sm font-medium tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white lg:text-lg mb-8">
              Disini saya menjelaskan singkat mengenai ketertarikan saya sebagai Front-End Developer.
            </span>
          </div>
          <div className="mt-4 flex w-full flex-col justify-start lg:flex-row">
            <div className="my-16 font-sans font-medium lg:my-0 lg:w-1/2 lg:p-3">
              <h2 className="mb-2 text-2xl font-bold tracking-wide">Know About me!</h2>
              <div className="mb-6 font-normal tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white">
                <p className="my-3">
                  Halo! Saya Muhammad Andrian Saputra,{' '}
                  <span className="font-semibold">Seorang Front-end Developer Ototdidak.</span>{' '}
                  Tinggal di Yogyakarta. Keahlian saya{' '}
                  <span className="">
                    JavaScript, Node.js, PHP, dan React.js, termasuk Front-End serta Back-End
                    sedikitnya
                  </span>
                  .
                </p>
                <p className="my-3">
                  saya telah mempelajari dasar-dasar Jaringan Komputer, namun saya menemukan passion
                  saya dalam mengembangkan interface user yang menarik dan fungsional untuk web.{' '}
                  <span className="font-semibold">
                    Minat saya pada Front-End Development berawal dari ketertarikan pada desain dan
                    interaktivitas yang dapat memberikan pengalaman pengguna yang menyenangkan.
                  </span>{' '}
                  Saya selalu antusias.
                </p>
                <p className="my-3">
                  Selama ini, saya telah mengasah keterampilan saya dalam HTML, CSS, JavaScript, dan
                  PHP, serta menggunakan framework seperti React atau Laravel untuk membuat aplikasi
                  web.
                </p>
                <p className="my-3">
                  Meskipun saya masih dalam tahap pendidikan, saya berfokus pada pengembangan
                  interface pengguna yang intuitif dan responsif. Melalui proyek-proyek pribadi, saya berusaha untuk selalu menghadirkan
                  hasil yang memenuhi standar kualitas tinggi dan memberikan pengalaman pengguna
                  yang optimal.
                </p>
              </div>
              <button className="rounded-sm bg-zinc-800 px-10 py-5 font-sans font-semibold uppercase tracking-widest text-white duration-200 ease-linear hover:-translate-y-1 hover:bg-zinc-700 dark:bg-zinc-900 dark:hover:bg-zinc-950">
                Contact
              </button>
            </div>

              <div className="lg:w-1/2 lg:px-5">
                <div className="">
                  <h2 className="mb-6 text-2xl font-bold text-black transition-colors duration-500 ease-in-out dark:text-white">My Skills</h2>
                  <div className="my-3 flex flex-wrap gap-4 text-xs lg:text-lg">
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      JavaScript
                    </span>
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      Node.js
                    </span>
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      React.js
                    </span>
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      PHP
                    </span>
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      MySQL
                    </span>
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      HTML
                    </span>
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      CSS
                    </span>
                    <span className="rounded-lg bg-zinc-800 px-5 py-3 text-base font-medium text-gray-300 dark:text-white">
                      TailwindCSS
                    </span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
