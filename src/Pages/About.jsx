import React from 'react';
import './About.css';
import { SocialIcon } from 'react-social-icons';
import fara from '../assets/Images/fara.jpeg';
import ghea from '../assets/Images/ghea.jpeg';

const teamMembers = [
  {
    name: 'Fharra Diba Kemala Pratiwi',
    role: 'Website Developer & Data Analyst',
    nim: '2257301047',
    photo: fara,
    social: {
      instagram: 'https://www.instagram.com/farrdib_?igsh=a2ZjeHhucms1cDA2',
      linkedin: 'https://www.linkedin.com/in/fharra-diba-kemala-50a873264',
      tiktok: 'https://www.tiktok.com/@.farrdib?_t=ZS-8yBevavxSXh&_r=1',
      whatsapp: '6289677300020',
      email: 'fharra22si@mahasiswa.pcr.ac.id',
    },
    responsibility: 'Pengumpulan data, pembersihan data, dan pengembangan website.',
  },
  {
    name: 'Ghefira Rafa Aurelia Chandra',
    role: 'Website Developer & Machine Learning Engineer',
    nim: '2257301052',
    photo: ghea,
    social: {
      instagram: 'https://www.instagram.com/ghefirarafaaureliaaa?igsh=dHpva2ZpcGhqcmJ0',
      linkedin: 'https://linkedin.com/in/ghefira-profile',
      tiktok: 'https://www.tiktok.com/@ghefirarafaaurelia?_t=ZS-8yBeyazQ6EL&_r=1',
      whatsapp: '6287834689064',
      email: 'ghefira22si@mahasiswa.pcr.ac.id',
    },
    responsibility: 'Pemodelan machine learning dan integrasi model ke website.',
  },
];

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">Tentang Tim Kami</h1>

      {/* Visi dan Misi */}
      <section className="section vision-mission">
        <h2>Visi & Misi</h2>
        <p><strong>Visi:</strong> Menjadi tim data science terdepan yang inovatif dan berdampak, mengolah data media sosial secara cerdas untuk menghasilkan wawasan strategis yang memberdayakan pengambilan keputusan bisnis dan sosial secara tepat dan berkelanjutan.</p>
        <p><strong>Misi:</strong></p>
        <ul>
          <li>Mengembangkan model analisis data yang akurat, transparan, dan mudah dipahami untuk berbagai kebutuhan bisnis dan sosial.</li>
          <li>Membangun aplikasi web interaktif yang user-friendly untuk visualisasi data, memudahkan eksplorasi dan pemahaman informasi kompleks.</li>
          <li>Meningkatkan literasi data dan kesadaran pemanfaatan data di kalangan pengguna media sosial melalui edukasi dan kolaborasi aktif.</li>
          <li>Mengintegrasikan teknologi machine learning terbaru untuk memberikan prediksi dan insight yang relevan dan actionable.</li>
          <li>Mendukung pengambilan keputusan berbasis data yang inovatif demi kemajuan bisnis dan kesejahteraan masyarakat luas.</li>
        </ul>
      </section>

      {/* Deskripsi Proyek */}
      <section className="section project-description">
        <h2>Deskripsi Proyek</h2>
        <p>
          Di era digital yang serba cepat, media sosial menjadi sumber data yang kaya dan dinamis. Proyek ini dirancang untuk menggali pola keterlibatan pengguna media sosial melalui pendekatan data science dan machine learning yang canggih. 
          Dengan memanfaatkan teknik analisis data mutakhir, kami membangun sebuah dashboard interaktif yang tidak hanya menyajikan insight mendalam, tetapi juga prediksi yang akurat untuk mendukung pengambilan keputusan strategis.
          Dashboard ini memberikan visualisasi yang intuitif dan mudah dipahami, memungkinkan pengguna untuk menavigasi kompleksitas data dengan efisien. Melalui pemodelan prediktif, proyek ini membantu mengidentifikasi tren perilaku pengguna, 
          mengoptimalkan strategi pemasaran, dan meningkatkan efektivitas komunikasi digital. Dengan demikian, proyek ini menjadi alat penting bagi bisnis dan organisasi yang ingin memanfaatkan kekuatan data media sosial untuk mencapai tujuan mereka secara lebih tepat dan terukur.
        </p>
      </section>

      {/* Profil Tim */}
      <section className="section team-section">
        <h2>Profil Anggota Tim</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.nim} className="team-card">
              <div className="photo-wrapper">
                <img src={member.photo} alt={member.name} className="team-photo" />
              </div>
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p><strong>NIM:</strong> {member.nim}</p>
              <p><strong>Peran:</strong> {member.responsibility}</p>
              <div className="social-links">
                <SocialIcon url={member.social.instagram} style={{ height: 30, width: 30, margin: '0 5px' }} />
                <SocialIcon url={member.social.linkedin} style={{ height: 30, width: 30, margin: '0 5px' }} />
                <SocialIcon url={member.social.tiktok} style={{ height: 30, width: 30, margin: '0 5px' }} />
                <SocialIcon url={`https://wa.me/${member.social.whatsapp}`} style={{ height: 30, width: 30, margin: '0 5px' }} />
                <SocialIcon url={`mailto:${member.social.email}`} style={{ height: 30, width: 30, margin: '0 5px' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Proyek */}
<section className="section timeline-section">
  <h2>Timeline Proyek</h2>
  <ol className="timeline-list">
    <li><strong>27 Mei - 9 Juni 2025:</strong> Pengumpulan dan pembersihan data.</li>
    <li><strong>10 Juni - 23 Juni 2025:</strong> Eksplorasi data dan visualisasi awal.</li>
    <li><strong>24 Juni - 7 Juli 2025:</strong> Pengembangan model machine learning.</li>
    <li><strong>8 Juli - 14 Juli 2025:</strong> Integrasi model ke dashboard web.</li>
    <li><strong>15 Juli - 21 Juli 2025:</strong> Pengujian dan deployment.</li>
  </ol>
</section>


      {/* Kolaborasi dan Partner */}
<section className="section partner-section">
  <h2>Kolaborasi & Partner</h2>
  <p>
    Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas segala rahmat, karunia, dan bimbingan-Nya, sehingga kami dapat menyelesaikan laporan proyek workshop data science yang berjudul “Mengenal Perilaku Pengguna Melalui Engagement Media Sosial: Analisis Berbasis Data” ini dengan baik dan lancar.
  </p>
  <p>
    Kami menyampaikan apresiasi dan ucapan terima kasih yang sebesar-besarnya kepada dosen pembimbing, Ibu Warnia Nengsih, S.Kom., M.Kom., dan Ibu Asmawati, S.Tr.Kom., atas segala bimbingan, arahan, dan motivasi selama proses pengerjaan proyek ini. Terima kasih juga kami sampaikan kepada seluruh pihak yang telah memberikan dukungan, baik secara langsung maupun tidak langsung, sehingga laporan ini dapat terselesaikan dengan baik.
  </p>
  <p>
    Kolaborasi dengan berbagai pihak sangat membantu kelancaran proyek ini serta memberikan pengalaman berharga yang kami harapkan dapat berkontribusi pada pengembangan ilmu data science, khususnya di bidang analisis media sosial.  
    Kami menyadari laporan ini masih jauh dari sempurna, oleh karena itu kritik dan saran yang membangun sangat kami harapkan guna perbaikan di masa mendatang.
  </p>
  <p>Semoga laporan ini dapat memberikan manfaat dan menjadi referensi yang berguna bagi pengembangan ilmu data science secara lebih luas.</p>
</section>


     {/* Kontak Tim */}
<section className="section contact-section">
  <h2>Kontak Kami</h2>
  <p><strong>Email:</strong> info@pcr.ac.id</p>
  <p><strong>Telepon:</strong> +62 761 123456</p>
  <p><strong>Alamat:</strong> Politeknik Caltex Riau, Jalan Umban Sari, Pekanbaru, Riau</p>
  <div className="social-links contact-social">
<SocialIcon url="https://www.instagram.com/politeknikcaltexriau/" style={{ height: 30, width: 30, margin: '0 5px' }} />
<SocialIcon url="https://www.facebook.com/politeknikcaltexriau" style={{ height: 30, width: 30, margin: '0 5px' }} />
<SocialIcon url="https://www.tiktok.com/@politeknikcaltexriau" style={{ height: 30, width: 30, margin: '0 5px' }} />
<SocialIcon url="https://pcr.ac.id/" style={{ height: 30, width: 30, margin: '0 5px' }} />

  </div>
</section>


      {/* Footer */}
      <footer className="about-footer">
        <p>© 2025 Proyek Data Science Media Sosial. All rights reserved.</p>
        <p>Website oleh Tim Workshop Data Science</p>
      </footer>
    </div>
  );
};

export default About;
