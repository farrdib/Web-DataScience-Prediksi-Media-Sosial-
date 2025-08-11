import React from 'react';
import './ResultVisualization.css';

const ResultVisualization = () => {
  return (
    <div className="result-visualization-wrapper">
      <div className="result-visualization-container">
        <h1 className="result-visualization-title">Visualisasi Hasil Prediksi Likes Instagram</h1>

        <section className="result-visualization-section">
          <h2>Storytelling Hasil Analisis & Prediksi</h2>
          <p>
            Fitur prediksi Instagram Like yang kami kembangkan memungkinkan pengguna memperkirakan jumlah likes yang akan diperoleh pada sebuah postingan <b>dalam sekali klik</b> saja! Sistem menyediakan <b>dua model prediksi</b> yang memanfaatkan kombinasi karakteristik akun dan postingan untuk menghasilkan estimasi jumlah likes secara presisi.
          </p>
          <ul>
            <li>
              <b>Model 1 - 4 Fitur:</b><br />
              💬 <b>Komentar</b> &nbsp; 
              📈 <b>Engagement Rate</b> &nbsp; 
              👥 <b>Jumlah Followers</b> &nbsp; 
              🏷️ <b>Jumlah Hashtag Digunakan</b><br />
              🔮 <i>Output: Prediksi jumlah likes berdasarkan kombinasi 4 fitur di atas.</i>
            </li>
            <li style={{ marginTop: 18 }}>
              <b>Model 2 - 5 Fitur:</b><br />
              💬 <b>Komentar</b> &nbsp;
              📈 <b>Engagement Rate</b> &nbsp;
              👁️ <b>Impressions</b> &nbsp;
              📊 <b>Pertumbuhan Engagement</b> &nbsp;
              📣 <b>Buzz Change Rate</b><br />
              🔮 <i>Output: Prediksi lebih akurat untuk likes dengan pertimbangan trend engagement dan buzz.</i>
            </li>
          </ul>
          <p>
            Pengguna cukup memasukkan nilai tiap fitur, misal jumlah komentar, engagement, follower, hashtag, hingga impressions, untuk langsung mendapatkan prediksi jumlah likes yang kemungkinan diraih pada postingan Instagram berikutnya.<br/>
            Fitur ini sangat bermanfaat untuk content creator, UMKM, dan marketer dalam <b>merancang strategi konten lebih terukur & data-driven</b> berdasarkan insight prediksi.
          </p>
          <p>
            <span style={{ fontWeight: 500, color: '#457895' }}>🧪 Tes Server:</span> Semua proses prediksi dijalankan secara real-time di server sehingga hasil yang diberikan optimal dan up-to-date.
          </p>
        </section>

        <section className="result-visualization-section">
          <h2>Video Presentasi Fitur</h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              title="Video Presentasi"
              src="https://www.youtube.com/embed/6TOFlwRVIzU"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultVisualization;
