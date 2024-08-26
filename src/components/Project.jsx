import React from 'react';

function Project() {
  const cards = [
    {
      title: 'Perpustakaan Online',
      description: 'Sebuah projek web yang menyediakan layanan perpustakaan online',
      image: 'https://images-ext-1.discordapp.net/external/M7gVFfAsJYLQW7slS0POH4HDKgR9IT6WXxGJDTYE3-M/https/opengraph.githubassets.com/b6c63f66087b9b96c401721299f0c8c1f7e55d365abd81b1c3988a01b0e37c96/Luiso9/congga?format=webp&width=900&height=450',
      link: 'https://github.com/luiso9/congga'
    },
    {
      title: 'Automatic Gate Arduino',
      description: 'Arduino yang berfungsi sebagai pengatur gerbang otomatis',
      image: 'https://images-ext-1.discordapp.net/external/7N3f8huZsKwfWBwgwbgXSd1FX73AHOtvxKQivx2ghOs/https/opengraph.githubassets.com/3737eebea3247d564ba402f15ab45b72008d14a0acf3af5617873a75a6fe6240/Luiso9/automatic-gate-arduino?format=webp&width=900&height=450',
      link: 'https://github.com/luiso9/automatic-gate-arduino'
    },
    {
      title: 'mari-go',
      description: 'Sebuah Discord Bot yang saya buat dengan Go-Lang',
      image: 'https://images-ext-1.discordapp.net/external/jBIBega2qzhPTNAvQHWRIVHaTMCVJFpwFjoOjCeIAIA/https/opengraph.githubassets.com/b7f899463e78d04a48284ab3bc3614d1ffac0128489ff7fde463782ce1c62fd5/Luiso9/mari-go?format=webp&width=900&height=450',
      link: 'https://github.com/luiso9/mari-go'
    },
    {
      title: 'emfio',
      description:
        'Bot Facebook yang saya kembangkan untuk mengupload tiap frame sebuah film/anime secara berkala',
      image: 'https://images-ext-1.discordapp.net/external/heJrStxC9C45SM4WYg5LnZYwg9Bq7DllAuDxQ0Ck9Do/https/opengraph.githubassets.com/7a161cc3a8be02ae6fc56b2f734b294a4a57362849521dd7fbf17e8d0bd65fd3/Luiso9/emfio?format=webp&width=900&height=450',
      link: 'https://github.com/luiso9/emfio'
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

      <div className="container mx-auto mb-24">
        <div className="flex flex-col items-center gap-3 md:flex-row">
          {/* Batas  */}
          {cards.map((card, i) => (
            <div
              className="text-neutral z-1 relative flex max-w-[1fr] flex-col items-center gap-5 overflow-hidden rounded-md bg-[##FFFCEC] shadow-md transition-colors ease-in-out dark:bg-neutral-100 md:w-1/2 hover:shadow-md dark:hover:shadow-slate-400 "
              key={i}>
              <div className="h-42 border-b bg-cover">
                <img src={card.image} alt="" />
              </div>
              <a
                key={i}
                href={card.link}
                aria-hidden="true"
                className="m-auto max-h-[53px] min-h-[53px] w-[1fr] justify-center rounded-lg font-bold leading-relaxed hover:text-blue-400">
                {card.title}
              </a>
              <div className="w-64 h-[0.5px] border-black bg-gray-200"></div>
              <div className="mx-auto max-w-[350px] text-ellipsis pb-6 pl-9 pr-9 text-sm leading-5">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
