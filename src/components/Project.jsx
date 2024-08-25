import React from 'react';

function Project() {
  const cards = [
    {
      title: 'Perpustakaan Online',
      description: 'Sebuah projek web yang menyediakan layanan perpustakaan online',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com/luiso9/congga',
    },
    {
      title: 'Automatic Gate Arduino',
      description: 'Arduino yang berfungsi sebagai pengatur gerbang otomatis',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com/luiso9/automatic-gate-arduino',
    },
    {
      title: 'Mari-go',
      description: 'Sebuah Discord Bot yang saya buat dengan Go-Lang',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com/luiso9/mari-go',
    },
    {
      title: 'Emfio',
      description:
        'Bot Facebook yang saya kembangkan untuk mengupload tiap frame sebuah film/anime secara berkala',
      image: 'https://via.placeholder.com/150',
      link: 'https://github.com/luiso9/emfio',
    }
  ];

  return (
    <>
      <section
        id="projects"
        className="max-w-full overflow-hidden bg-white py-20 transition-colors duration-500 ease-in-out dark:bg-black md:py-28">
        <div className="px-4 lg:px-20">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-black transition-colors duration-500 ease-in-out dark:text-white">
              Project
            </h2>
            <div className="my-4 h-[2px] w-12 rounded-md bg-gray-600 dark:bg-white"></div>
            <span className="w-11/12 text-center text-sm font-medium tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white lg:text-lg">
              Proyek-proyek yang saya kerjakan
            </span>
          </div>
        </div>
      </section>
      <div className="container mx-auto mb-20">
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {cards.map((card, i) => (
            <a
              key={i}
              href={card.link}
              className="relative cursor-pointer group overflow-hidden p-5 duration-1000 hover:duration-1000 bg-neutral-800 rounded-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative z-10">
                <h3 className="text-neutral-50 font-bold text-xl italic">{card.title}</h3>
                <p className="text-neutral-300">{card.description}</p>
              </div>
              <div className="absolute inset-0 z-0">
                <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 -top-12 -left-12 absolute shadow-yellow-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-44 left-14 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-56 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-24 h-24"></div>
                <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-red-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-12 h-12"></div>
                <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 top-12 left-12 absolute shadow-green-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-44 h-44"></div>
                <div className="group-hover:rotate-45 bg-transparent group-hover:scale-150 -top-24 -left-12 absolute shadow-sky-800 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-64 h-64"></div>
                <div className="group-hover:-rotate-45 bg-transparent group-hover:scale-150 top-24 left-12 absolute shadow-sky-500 shadow-inner rounded-xl transition-all ease-in-out group-hover:duration-1000 duration-1000 w-4 h-4"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
