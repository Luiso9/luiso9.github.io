import react from 'react';

function Cert() {
  return (
    <section
      id="cert"
      className="max-w-full overflow-hidden bg-white py-20 transition-colors duration-500 flex justify-center items-center ease-in-out dark:bg-black md:py-28">
      <div className="px-4 lg:px-20">
        <div className="mb-3 flex h-full w-full flex-col items-center justify-center">
          <h2 className="text-4xl font-bold uppercase tracking-widest text-black transition-colors duration-500 ease-in-out dark:text-white">
            Certificate
          </h2>
          <div className="my-4 h-[2px] w-12 rounded-sm bg-gray-600 dark:bg-white"></div>
          <span className="w-11/12 text-center text-sm font-medium tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white lg:text-lg">
            Sertifikat yang saya dapatkan melalui kursus yang saya ikuti.
          </span>
        </div>
        {/* Card Start */}
        <div className="mt-12 flex w-full flex-wrap items-start justify-between gap-8">
          {/* Card 1 */}
          <div className="w-full sm:w-96 md:w-80">
            <img
              className="w-full rounded-sm object-cover"
              src="https://files.catbox.moe/a0puej.png"
              alt="Cisco"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white">
                IT Essentials Course by Cisco Networking Academy in Institut Teknologi Dirgantara
                Adisutjipto (2022)
              </h3>
              <span className="text-sm font-medium tracking-wide text-gray-600 transition-colors duration-500 ease-in-out dark:text-gray-400">
                Sertifikat ini menunjukkan bahwa saya telah berhasil menyelesaikan kursus IT
                Essentials yang diselenggarakan oleh Cisco Networking Academy di Institut Teknologi
                Dirgantara Adisutjipto pada tahun 2022.
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-96 md:w-80">
            <img
              className="w-full rounded-sm object-cover"
              src="https://files.catbox.moe/f2ucaw.jpg"
              alt="AWS"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white">
                Amazon Web Service (AWS) Educate
              </h3>
              <span className="text-sm font-medium tracking-wide text-gray-600 transition-colors duration-500 ease-in-out dark:text-gray-400">
                Amazon Web Service (AWS) Educate adalah inisiatif global Amazon untuk memberikan
                sumber daya yang komprehensif kepada siswa untuk membangun keterampilan dalam cloud.
                AWS Educate merupakan kurikulum bebas biaya yang menyediakan akses ke konten,
                pelatihan, jalur, layanan AWS, dan AWS Educate Job Board dengan berbagai peluang
                kerja.
              </span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full sm:w-96 md:w-80">
            <img
              className="w-full rounded-sm object-cover"
              src="https://files.catbox.moe/a3w927.jpg"
              alt="Taruna"
            />
            <div className="mt-4">
              <h3 className="text-xl font-bold tracking-wide text-black transition-colors duration-500 ease-in-out dark:text-white">
                Taruna Angkatan I SMK N 3 Yogyakarta
              </h3>
              <span className="text-sm font-medium tracking-wide text-gray-600 transition-colors duration-500 ease-in-out dark:text-gray-400">
              Program ketarunaan meliputi kegiatan kesamaptaan atau bina fisik, baris berbaris, materi ruang, kerohanian dan evaluasi posturisasi. Pembinaan ketahanan mental, ketahanan fisik, disiplin kerja, perilaku atau sifat positif siswa bertujuan untuk mencetak generasi yang beriman, kuat, berkarakter, siap menghadapi dunia industri dan jenjang Pendidikan selanjutnya.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cert;
