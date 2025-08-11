import React from 'react';
import './DataCleaning.css';

const DataCleaning = () => {
  return (
    <div className="data-cleaning-wrapper">
      <div className="data-cleaning-container">
        <h1 className="data-cleaning-title">Data Cleaning & Transformation</h1>

        <section className="data-cleaning-section">
          <h2>Ringkasan Langkah Preprocessing</h2>
          <p>1. Deteksi dan penanganan nilai hilang (missing values) dengan imputasi median untuk fitur numerik, menjaga distribusi data tetap konsisten.</p>
          <p>2. Penghapusan duplikasi data untuk menghindari bias akibat data berulang di dataset.</p>
          <p>3. Identifikasi dan pembersihan data outlier berdasarkan pengukuran statistik, agar model tidak terpengaruh oleh nilai ekstrem yang tidak representatif.</p>
          <p>4. Normalisasi fitur numerik menggunakan skala standar agar memiliki rentang nilai seragam dan mempercepat konvergensi model.</p>
          <p>5. Transformasi fitur kategori menjadi variabel dummy melalui one-hot encoding untuk kompatibilitas dengan algoritma machine learning.</p>
          <p>6. Pemrosesan fitur tanggal dan waktu untuk mengekstrak fitur relevan seperti hari dalam seminggu, jam aktif, dll.</p>
        </section>

        <section className="data-cleaning-section">
          <h2>Jumlah Data yang Dibersihkan dan Diperbaiki</h2>
          <p>Dataset awal mengandung sekitar 12000 baris data.</p>
          <p>Terdapat sekitar 4685 baris data yang dihapus akibat merupakan duplikasi atau outlier signifikan.</p>
          <p>Lebih dari 2419 baris data yang memiliki nilai hilang pada kolom <code>mentions</code>, kemudian diperbaiki melalui imputasi terukur.</p>
          <p>Setelah tahap cleaning, dataset menjadi lebih bersih, terstruktur, dan siap untuk tahap eksplorasi serta pemodelan lebih lanjut.</p>
        </section>

        <section className="data-cleaning-section">
          <h2>Skema Transformasi dan Encoding Fitur</h2>
          <p>
            Semua fitur kategori dalam dataset diubah menjadi variabel dummy menggunakan teknik one-hot encoding. 
            Untuk kolom seperti <code>mentions</code>, kami menggunakan <code>OneHotEncoder</code> 
            dari Scikit-learn dengan parameter <code>drop='first'</code> untuk menghindari multikolinearitas. 
            Hasil encoding kemudian digabungkan kembali ke dataset setelah kolom kategorikal asli dihapus. 
            Selain itu, untuk seluruh kolom kategori, kami juga menggunakan fungsi <code>pandas.get_dummies()</code>
            dengan parameter <code>drop_first=True</code> 
            agar menghasilkan representasi numerik yang efisien dan kompatibel dengan model machine learning.
          </p>
          <p>
            Untuk fitur numerik, kami melakukan normalisasi menggunakan 
            <code>StandardScaler</code> agar setiap fitur memiliki rata-rata nol dan standar deviasi satu. 
            Proses ini membantu model dalam pembelajaran dengan mempercepat konvergensi dan meningkatkan stabilitas. 
            Tahapan transformasi ini memastikan dataset akhir siap dan optimal untuk proses pelatihan model dan analisis lebih lanjut.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DataCleaning;
