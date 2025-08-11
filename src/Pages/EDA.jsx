import React from 'react';

const EDA = () => {
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', fontFamily: 'Candara, sans-serif' }}>
      <h1 style={{ color: '#457895', textAlign: 'center' }}>📊 Eksplorasi Data Engagement & Sentimen di Media Sosial</h1>

      {/* Penjelasan Data */}
      <div style={{ marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.6 }}>
        <p><strong>Jumlah data setelah filter:</strong> 1741 post</p>
        <p><strong>Contoh struktur data:</strong></p>
        <pre style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '6px', overflowX: 'auto' }}>
{`     post_id          platform     engagement_rate     likes_count     sentiment_label
0    kcqbs6hxybia     Instagram        0.19319             1264.0         Positive
6    32qywmjy84gk     Instagram        0.16139             2814.0         Negative
15   atmhw74hez00     Instagram        1.05387             4830.0         Negative
56   8gnl0ri4ubue     Instagram        0.39246             2392.0         Positive
57   d09worvhz9me     Instagram        0.06182             3095.0         Neutral`}
        </pre>
      </div>

      {/* Heatmap Korelasi */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ color: '#457895' }}>🔍 Korelasi Antar Metrik Engagement</h2>
        <div style={{ width: '100%', height: '600px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="/correlation_heatmap.html"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Heatmap Korelasi Engagement"
          ></iframe>
        </div>
      </div>

      {/* Scatter Plot Likes vs Engagement */}
      <div>
        <h2 style={{ color: '#457895' }}>📈 Hubungan Likes dan Engagement Rate Berdasarkan Sentimen</h2>
        <div style={{ width: '100%', height: '600px', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
          <iframe
            src="/scatter_plot_likes_vs_engagement.html"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="Scatter Plot Likes vs Engagement"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default EDA;
