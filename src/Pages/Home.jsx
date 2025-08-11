import React from 'react';
import './Home.css';
import socialDatasetImage from '../assets/Images/social_dataset.png'; // sesuaikan path gambarmu

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="welcome-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
            <span style={{ fontSize: '3rem', fontWeight: 'bold', color: '#b84b4b', fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
              Hi, Senang sekali bisa menyambut Anda di platform analisis media sosial ini!
            </span>
            <span 
              className="welcome-opening" 
              style={{
                fontSize: '1.0rem',
                color: '#555',
                fontFamily: "'Comic Sans MS', cursive, sans-serif",
                fontWeight: '600',
                lineHeight: '1.2',
                maxWidth: '600px'
              }}
            >
            </span>
          </h1>

          <h2 className="title">Klasifikasi Media Sosial</h2>
          <h3 className="subtitle">
            Sistem ini membantu kamu memahami pola dan tren di media sosial dengan cepat dan mudah.  
            Yuk, jelajahi data dan temukan insight penting yang bisa mendukung aktivitas dan keputusan kamu!
          </h3>
        </div>
        <div className="hero-image">
          <img src={socialDatasetImage} alt="Ilustrasi Dataset Media Sosial" />
        </div>
      </section>

      {/* Deskripsi dan Penjelasan */}
      <section className="description-section">
        <h2>Deskripsi Proyek</h2>
        <p>
          Proyek ini bertujuan melakukan analisis data media sosial untuk memahami pola keterlibatan pengguna, sentimen publik, dan efektivitas kampanye pemasaran.  
          Dengan menganalisis data dari berbagai platform media sosial, kami dapat memberikan wawasan yang berguna untuk strategi pemasaran, pengembangan produk, dan pengambilan keputusan bisnis yang lebih tepat sasaran.
        </p>
        <p>
          Analisis media sosial merupakan proses mengumpulkan, mengolah, dan menginterpretasikan data dari aktivitas pengguna di media sosial, seperti postingan, komentar, likes, dan interaksi lainnya.  
          Hasil analisis ini membantu memahami audiens, mengukur keberhasilan kampanye, serta mengidentifikasi tren dan sentimen yang berkembang di masyarakat.
        </p>

        <h2>Deskripsi Dataset</h2>
        <p>
          Dataset yang digunakan dalam proyek ini berisi data aktivitas pengguna media sosial dari platform populer seperti Facebook, Twitter, dan Instagram.  
          Data mencakup postingan, komentar, jumlah likes, shares, serta metadata terkait waktu dan lokasi.  
          Dataset ini dikumpulkan secara real-time menggunakan tools media monitoring dan dikurasi untuk memastikan kualitas dan relevansi data.
        </p>
        <p>
          Data tersebut memungkinkan analisis mendalam menggunakan teknik data science seperti natural language processing (NLP), analisis sentimen, dan machine learning untuk mengidentifikasi pola perilaku pengguna dan tren yang sedang berkembang.
        </p>
      </section>

      {/* Background waves or other elements */}
      <div className="wave wave-top"></div>
      <div className="wave wave-bottom"></div>
    </div>
  );
};

export default Home;
