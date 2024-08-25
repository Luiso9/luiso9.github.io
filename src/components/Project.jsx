import react from 'react';

function Project() {
  return (
    <section
      id="projects"
      className="max-w-full overflow-hidden bg-white py-20 transition-colors duration-500 ease-in-out dark:bg-black md:py-28">
      <div className="px-4 lg:px-20">
        <div
          className="mb-3 flex h-full w-full flex-col items-center justify-center">
          <h2 className="text-4xl font-bold uppercase tracking-widest text-black transition-colors duration-500 ease-in-out dark:text-white">
            Projects
          </h2>
          <div className="my-4 h-[2px] w-12 rounded-md bg-gray-600 dark:bg-white"></div>
          <span className="w-11/12 text-center text-sm font-medium tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white lg:text-lg">
            Temukan projek-projek yang saya telah selesai membuat.
          </span>
        </div>
        <div className="mt-12 flex w-full flex-col gap-5">
          <div className="w-full">
            <img
              className="w-full rounded-md object-cover"
              src="src\assets\fractal.png"
              alt="Project 1"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
