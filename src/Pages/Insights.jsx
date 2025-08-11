import React from 'react';
import './Insights.css';

const Insights = () => {
  return (
    <div className="insights-wrapper">
      <div className="insights-container">
        <h1 className="insights-title">Insight & Rekomendasi Media Sosial</h1>

        <section className="insights-section">
          <h2>Summary Insight</h2>
          <p>
            Salah satu insight menarik dari analisis keterlibatan di media sosial adalah bagaimana beberapa elemen kunci secara nyata membentuk tingkat interaksi sebuah postingan, baik dalam bentuk like, komentar, maupun share. Penggunaan <b>hashtag</b> dan <b>mention</b> yang relevan terbukti mampu meningkatkan jangkauan serta potensi engagement sebuah unggahan. Namun, perlu diingat bahwa menambahkan terlalu banyak hashtag atau mention justru bisa berdampak negatif, karena algoritma media sosial maupun pengguna akan menilai postingan tersebut sebagai spam. Idealnya, gunakan hashtag dan mention secara terukur dan tetap relevan dengan konteks konten agar hasilnya tetap optimal di mata audiens.
          </p>
          <p>
            Selain itu, <b>waktu posting</b> juga memegang peranan penting terhadap seberapa besar engagement yang didapatkan. Unggahan yang dipublikasikan saat <b>jam-jam aktif</b>, seperti sore hingga malam hari, sesuai dengan waktu kebanyakan pengguna sedang beraktivitas online, umumnya memperoleh lebih banyak interaksi. Penelitian membuktikan bahwa hari-hari mendekati akhir pekan, terutama Kamis hingga Sabtu, serta sore hari, merupakan waktu efektif untuk memposting konten jika ingin mendapatkan like dan komentar maksimal.
          </p>
          <p>
            <b>Jenis konten</b> yang dipilih pun memiliki pengaruh signifikan. Konten berupa gambar atau foto cenderung mampu menarik lebih banyak like, sedangkan format video dan story biasanya lebih berhasil dalam mengundang komentar dan share karena narasi serta daya tarik visualnya yang lebih engaging.
          </p>
          <p>
            Faktor lain yang tak kalah penting adalah <b>jumlah followers</b>. Akun dengan pengikut lebih banyak memang secara absolut berpeluang mendapatkan engagement yang tinggi. Namun menariknya, <b>engagement rate</b> yaitu rasio interaksi dibanding jumlah followers, justru cenderung lebih tinggi pada akun menengah hingga influencer kecil. Hal ini terjadi karena relasi dan interaksi mereka biasanya lebih erat dan personal dengan audiensnya.
          </p>
          <p>
            Pertumbuhan engagement terbaik biasanya terjadi pada akun atau konten yang konsisten posting, <b>aktif membalas komentar</b>, dan cermat mengikuti <b>tren atau topik viral</b>. Pendekatan ini membuat akun terasa lebih hidup dan relevan, sehingga audiens merasa lebih terlibat secara emosional.
          </p>
          <p>
            Ternyata, <b>caption</b> dengan kata-kata positif, ajakan, atau pertanyaan yang mengundang opini dapat meningkatkan peluang audiens untuk berkomentar dan membagikan postingan. Komunikasi yang humanis ini serta strategi yang dilakukan oleh penggunaan platform yang cerdas dapat meningkatkan engagement di media sosial.
          </p>
        </section>

        <section className="insights-section">
          <h2>Rekomendasi</h2>
          <ul>
            <li><b>Optimalkan penggunaan hashtag dengan strategi yang cerdas.</b> Pilih dan kombinasikan 3 hingga 5 hashtag yang relevan dengan isi konten dan sedang populer. Jangan berlebihan agar postingan tidak terkesan spam, dan lakukan riset sederhana untuk memastikan hashtag yang digunakan memang masih sesuai tren serta spesifik pada audiens yang dibidik.</li>
            <li><b>Sesuaikan waktu posting dengan kebiasaan online audiens.</b> Postinglah konten pada jam-jam aktif, terutama sore sampai malam hari saat kemungkinan audiens mengakses media sosial paling tinggi. Gunakan fitur analitik untuk mengetahui waktu yang paling efektif sesuai pola followers-mu.</li>
            <li><b>Variasikan format dan kualitas konten visual.</b> Ciptakan kombinasi gambar menarik, video singkat, carousel informatif, serta stories interaktif agar audiens tidak bosan sekaligus menjangkau tipe pengguna berbeda. Konten orisinal dan konsisten sangat berpengaruh untuk membangun karakter serta menarik engagement yang lebih baik.</li>
            <li><b>Bangun komunitas aktif melalui interaksi dua arah.</b> Balas komentar dan mention secara rutin, serta manfaatkan caption untuk mengajukan pertanyaan atau polling sederhana. Hal ini akan membuat audiens merasa dihargai dan cenderung lebih sering berinteraksi di postingan kamu.</li>
            <li><b>Selalu monitor dan evaluasi performa konten.</b> Analisis secara rutin tipe postingan dan waktu publikasi mana yang menghasilkan engagement terbaik. Jangan takut untuk bereksperimen dan melakukan penyesuaian strategi berdasarkan data yang ditemukan.</li>
            <li><b>Prioritaskan kualitas dibanding kuantitas posting.</b> Lebih baik membuat konten yang benar-benar relevan, inspiratif, dan sesuai kebutuhan audiens, dibanding hanya rajin update tanpa value yang jelas. Konten bernilai lebih mudah mendapatkan atensi dan dibagikan secara organik.</li>
            <li><b>Penting untuk mengikuti tren dan info viral terbaru.</b> Rutin pantau tren atau topik hangat di media sosial, lalu manfaatkan insight tersebut untuk menyusun pesan, visual, maupun strategi kampanye yang lebih relevan dan berpotensi viral dalam waktu singkat.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Insights;
