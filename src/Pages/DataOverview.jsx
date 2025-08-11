import React from 'react';

const iframeStyle = {
  width: '100%',
  height: 300,
  border: 'none',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const sectionTitleStyle = {
  fontSize: '1.05rem',
  fontWeight: 600,
  marginBottom: '0.75rem',
  color: '#457895',
  textAlign: 'center',
};

const paragraphStyle = {
  marginBottom: '1rem',
  lineHeight: 1.6,
  textAlign: 'justify',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2rem',
  fontSize: '0.9rem',
};

const thStyle = {
  backgroundColor: '#f0f8ff',
  border: '1px solid #ccc',
  padding: '8px',
  fontWeight: 600,
  textAlign: 'left',
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 150,
};

const DataOverview = () => {
  return (
    <div
      style={{
        maxWidth: 800,
        margin: '2rem auto',
        padding: '1rem',
        fontFamily: 'Candara, sans-serif',
        color: '#333',
      }}
    >
      <h1 style={{ color: '#457895', marginBottom: '2rem', textAlign: 'center' }}>
        📊 Data Overview
      </h1>

      {/* Statistik Ringkas Data */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={sectionTitleStyle}>📌 Statistik Ringkas Data</h2>
        <p style={paragraphStyle}>
          Dataset ini terdiri dari <strong>12.000 baris</strong> data unggahan media sosial
          dan <strong>28 fitur</strong> atau kolom yang menggambarkan karakteristik unggahan,
          pengguna, kampanye, serta interaksi yang terjadi.
        </p>
        <p style={paragraphStyle}>
          Beberapa fitur penting dalam analisis antara lain:
          <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
            <li><strong>Identitas & Waktu:</strong> <code>post_id</code>, <code>timestamp</code>, <code>day_of_week</code>, <code>platform</code>, <code>user_id</code></li>
            <li><strong>Konteks & Isi Unggahan:</strong> <code>location</code>, <code>language</code>, <code>text_content</code>, <code>hashtags</code>, <code>mentions</code>, <code>keywords</code></li>
            <li><strong>Klasifikasi & Analisis Teks:</strong> <code>topic_category</code>, <code>sentiment_score</code>, <code>sentiment_label</code>, <code>emotion_type</code>, <code>toxicity_score</code></li>
            <li><strong>Performa & Interaksi:</strong> <code>likes_count</code>, <code>shares_count</code>, <code>comments_count</code>, <code>impressions</code>, <code>engagement_rate</code></li>
            <li><strong>Informasi Kampanye:</strong> <code>brand_name</code>, <code>product_name</code>, <code>campaign_name</code>, <code>campaign_phase</code></li>
            <li><strong>Riwayat & Perubahan:</strong> <code>user_past_sentiment_avg</code>, <code>user_engagement_growth</code>, <code>buzz_change_rate</code></li>
          </ul>
        </p>
      </div>

      {/* 5 Baris Pertama Dataset */}
      <div style={{ marginBottom: '2rem', overflowX: 'auto' }}>
        <h2 style={sectionTitleStyle}>📌 5 Baris Pertama Dataset</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>post_id</th>
              <th style={thStyle}>timestamp</th>
              <th style={thStyle}>day_of_week</th>
              <th style={thStyle}>platform</th>
              <th style={thStyle}>user_id</th>
              <th style={thStyle}>location</th>
              <th style={thStyle}>language</th>
              <th style={thStyle}>text_content</th>
              <th style={thStyle}>hashtags</th>
              <th style={thStyle}>mentions</th>
              <th style={thStyle}>comments_count</th>
              <th style={thStyle}>impressions</th>
              <th style={thStyle}>engagement_rate</th>
              <th style={thStyle}>brand_name</th>
              <th style={thStyle}>product_name</th>
              <th style={thStyle}>campaign_name</th>
              <th style={thStyle}>campaign_phase</th>
              <th style={thStyle}>user_past_sentiment_avg</th>
              <th style={thStyle}>user_engagement_growth</th>
              <th style={thStyle}>buzz_change_rate</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['kcqbs6hxybia', '2024-12-09 11:26:15', 'Monday', 'Instagram', 'user_52nwb0a6', 'Melbourne, Australia', 'pt', 'Just tried the Chromebook from Google. Best pu...', '#Food', '', 701, 18991, 0.19319, 'Google', 'Chromebook', 'BlackFriday', 'Launch', 0.0953, -0.3672, 19.1],
              ['vkmervg4ioos', '2024-07-28 19:59:26', 'Sunday', 'Twitter', 'user_ucryct98', 'Tokyo, Japan', 'ru', 'Just saw an ad for Microsoft Surface Laptop du...', '#MustHave, #Food', '@CustomerService, @BrandCEO', 359, 52764, 0.05086, 'Microsoft', 'Surface Laptop', 'PowerRelease', 'Post-Launch', 0.1369, -0.4510, -42.6],
              ['memhx4o1x6yu', '2024-11-23 14:00:12', 'Saturday', 'Reddit', 'user_7rrev126', 'Beijing, China', 'ru', "What's your opinion about Nike's Epic React? ...", '#Promo, #Food, #Trending', '', 643, 8887, 0.45425, 'Nike', 'Epic React', 'BlackFriday', 'Post-Launch', 0.2855, -0.4112, 17.4],
              ['bhyo6piijqt9', '2024-09-16 04:35:25', 'Monday', 'YouTube', 'user_4mxuq0ax', 'Lagos, Nigeria', 'en', 'Bummed out with my new Diet Pepsi from Pepsi! ...', '#Reviews, #Sustainable', '@StyleGuide, @BrandSupport', 743, 6696, 0.42293, 'Pepsi', 'Diet Pepsi', 'LaunchWave', 'Launch', -0.2094, -0.0167, -5.5],
              ['c9dkiomowakt', '2024-09-05 21:03:01', 'Thursday', 'Twitter', 'user_l1vpox2k', 'Berlin, Germany', 'hi', 'Just tried the Corolla from Toyota. Absolutely...', '#Health, #Travel', '@BrandSupport, @InfluencerName', 703, 47315, 0.08773, 'Toyota', 'Corolla', 'LocalTouchpoints', 'Launch', 0.6867, 0.0807, 38.8],
            ].map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, colIdx) => (
                  <td key={colIdx} style={tdStyle}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Visualizations */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={sectionTitleStyle}>📌 Pie Chart Campaign Phase</h2>
        <iframe
          src="/pie_chart_campaign_phase.html"
          style={iframeStyle}
          title="Pie Chart Campaign Phase"
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={sectionTitleStyle}>📌 Pie Chart Platform</h2>
        <iframe
          src="/pie_chart_platform.html"
          style={iframeStyle}
          title="Pie Chart Platform"
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={sectionTitleStyle}>📌 Strip Plot Likes per Platform</h2>
        <iframe
          src="/strip_likes_per_platform.html"
          style={iframeStyle}
          title="Strip Plot Likes per Platform"
        />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2 style={sectionTitleStyle}>📌 Histogram Sentiment Score</h2>
        <iframe
          src="/histogram_sentiment_score.html"
          style={iframeStyle}
          title="Histogram Sentiment Score"
        />
      </div>
    </div>
  );
};

export default DataOverview;
