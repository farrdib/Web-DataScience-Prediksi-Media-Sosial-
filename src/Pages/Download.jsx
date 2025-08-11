import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

import About from './About';
import DataOverview from './DataOverview';
import EDA from './EDA';
import DataCleaning from './DataCleaning';
import Modeling from './Modeling';
import ResultVisualization from './ResultVisualization';
import Insights from './Insights';

const DownloadFeature = () => {
  const pdfRef = useRef();

  const generatePDF = () => {
    if (!pdfRef.current) return;

    const opt = {
      margin: 0.5,
      filename: 'laporan_ringkasan.pdf',
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 3, dpi: 192, letterRendering: true },
      jsPDF: { unit: 'cm', format: 'a4', orientation: 'portrait' },
      pagebreak: {
        mode: ['css', 'legacy', 'avoid-all'],
        before: ['.page-break'],
        avoid: ['table', 'thead', 'tbody', 'tr', 'th', 'td', '.no-break']
      },
    };

    html2pdf()
      .set(opt)
      .from(pdfRef.current)
      .save();
  };

  const currentDate = new Date().toLocaleDateString('id-ID', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', fontFamily: 'Candara, sans-serif' }}>
      <button
        onClick={generatePDF}
        style={{
          marginBottom: 20,
          padding: '10px 20px',
          backgroundColor: '#457895',
          color: 'white',
          borderRadius: 5,
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Unduh Laporan Ringkasan (PDF)
      </button>

      <div
        ref={pdfRef}
        style={{
          backgroundColor: 'white',
          padding: 20,
          border: '1px solid #ccc',
          borderRadius: 8,
          color: '#333',
          fontSize: 14,
          lineHeight: 1.5,
          overflow: 'visible',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <h1 style={{ marginBottom: 5 }}>Laporan Ringkasan Analisis Data</h1>
          <p style={{ fontStyle: 'italic', fontSize: 13 }}>{currentDate}</p>
        </div>

        <About />
        <div className="page-break" />

        <DataOverview />
        <div className="page-break" />

        <EDA />
        <div className="page-break" />

        <DataCleaning />
        <div className="page-break" />

        <Modeling />
        <div className="page-break" />

        <ResultVisualization />
        <div className="page-break" />

        <Insights />
      </div>
    </div>
  );
};

export default DownloadFeature;
