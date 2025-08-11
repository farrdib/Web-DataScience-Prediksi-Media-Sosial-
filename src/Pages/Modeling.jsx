import React, { useState } from 'react';

const Modeling = () => {
  const [form1, setForm1] = useState({
    comments_count: 0,
    engagement_rate: 0.0,
    followers_count: 0,
    hashtag_count: 0,
  });

  const [form2, setForm2] = useState({
    comments_count: 0,
    engagement_rate: 0.0,
    impressions: 0,
    user_engagement_growth: 0.0,
    buzz_change_rate: 0.0,
  });

  const [likes1, setLikes1] = useState(null);
  const [likes2, setLikes2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setForm1((prev) => ({
      ...prev,
      [name]: name.includes("rate") ? parseFloat(value) : parseInt(value),
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setForm2((prev) => ({
      ...prev,
      [name]: name.includes("rate") || name.includes("growth")
        ? parseFloat(value)
        : parseInt(value),
    }));
  };

  const predictLikes = async (form, endpoint, setLikesFunc) => {
    setLoading(true);
    setError(null);
    setLikesFunc(null);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const response = await fetch(`https://f0a9122491f9.ngrok-free.app/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': 'true',
        },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();

      if (result.predicted_likes !== undefined) {
        setLikesFunc(result.predicted_likes);
      } else {
        throw new Error('Respon tidak mengandung prediksi likes.');
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        setError('⏰ Permintaan time out! Server tidak merespon.');
      } else {
        setError(`❌ ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  // Fungsi download CSV sederhana dari state
  const downloadCSV = () => {
    const headers = [
      'Model',
      'Comments Count',
      'Engagement Rate',
      'Followers Count',
      'Hashtag Count',
      'Impressions',
      'User Engagement Growth',
      'Buzz Change Rate',
      'Predicted Likes'
    ];

    const rows = [
      [
        'Model 1',
        form1.comments_count,
        form1.engagement_rate,
        form1.followers_count,
        form1.hashtag_count,
        '',
        '',
        '',
        likes1 !== null ? likes1 : ''
      ],
      [
        'Model 2',
        form2.comments_count,
        form2.engagement_rate,
        '',
        '',
        form2.impressions,
        form2.user_engagement_growth,
        form2.buzz_change_rate,
        likes2 !== null ? likes2 : ''
      ],
    ];

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(item => `"${item}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'prediksi_likes.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginBottom: '4px',
    display: 'block',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px 16px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    color: 'white',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  // Optional testServer function if you have it, else remove the button and function usage
  const testServer = async () => {
    try {
      const response = await fetch('https://f0a9122491f9.ngrok-free.app', {
        headers: { 'ngrok-skip-browser-warning': 'true' },
      });
      const result = await response.json();
      alert(`✅ Server Aktif\nStatus: ${result.status}`);
    } catch (err) {
      alert(`❌ Gagal koneksi server: ${err.message}`);
    }
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '30px auto',
        padding: 20,
        background: '#f8f9fa',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: 30 }}>📊 Prediksi Likes Instagram</h2>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Model 1 (4 Fitur)</h3>
          <label style={labelStyle}>💬 Komentar:</label>
          <input type="number" name="comments_count" value={form1.comments_count} onChange={handleChange1} style={inputStyle} />

          <label style={labelStyle}>📈 Engagement Rate:</label>
          <input type="number" step="0.01" name="engagement_rate" value={form1.engagement_rate} onChange={handleChange1} style={inputStyle} />

          <label style={labelStyle}>👥 Followers:</label>
          <input type="number" name="followers_count" value={form1.followers_count} onChange={handleChange1} style={inputStyle} />

          <label style={labelStyle}>🏷️ Hashtag Count:</label>
          <input type="number" name="hashtag_count" value={form1.hashtag_count} onChange={handleChange1} style={inputStyle} />

          <button
            onClick={() => predictLikes(form1, 'predict', setLikes1)}
            disabled={loading}
            style={{ ...buttonStyle, backgroundColor: '#007bff' }}
          >
            🔮 Prediksi Model 1
          </button>
          {likes1 !== null && (
            <div style={{ marginTop: 20, background: '#dff0ff', padding: 12, borderRadius: 8 }}>
              ❤️ Prediksi Likes (Model 1): <strong>{likes1.toLocaleString()}</strong>
            </div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <h3>Model 2 (5 Fitur)</h3>
          <label style={labelStyle}>💬 Komentar:</label>
          <input type="number" name="comments_count" value={form2.comments_count} onChange={handleChange2} style={inputStyle} />

          <label style={labelStyle}>📈 Engagement Rate:</label>
          <input type="number" step="0.01" name="engagement_rate" value={form2.engagement_rate} onChange={handleChange2} style={inputStyle} />

          <label style={labelStyle}>👁️ Impressions:</label>
          <input type="number" name="impressions" value={form2.impressions} onChange={handleChange2} style={inputStyle} />

          <label style={labelStyle}>📊 Engagement Growth:</label>
          <input type="number" step="0.01" name="user_engagement_growth" value={form2.user_engagement_growth} onChange={handleChange2} style={inputStyle} />

          <label style={labelStyle}>📣 Buzz Change Rate:</label>
          <input type="number" step="0.01" name="buzz_change_rate" value={form2.buzz_change_rate} onChange={handleChange2} style={inputStyle} />

          <button
            onClick={() => predictLikes(form2, 'predict2', setLikes2)}
            disabled={loading}
            style={{ ...buttonStyle, backgroundColor: '#17a2b8' }}
          >
            🔮 Prediksi Model 2
          </button>
          {likes2 !== null && (
            <div style={{ marginTop: 20, background: '#fff3cd', padding: 12, borderRadius: 8 }}>
              ❤️ Prediksi Likes (Model 2): <strong>{likes2.toLocaleString()}</strong>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <button onClick={testServer} style={{ ...buttonStyle, backgroundColor: '#28a745' }}>
          🧪 Tes Server
        </button>
      </div>

      <div style={{ marginTop: 30 }}>
        <button
          onClick={downloadCSV}
          style={{
            ...buttonStyle,
            backgroundColor: '#444',
            display: 'block',
            width: '100%',
          }}
        >
          ⬇️ Download CSV Data Prediksi
        </button>
      </div>

      {error && (
        <p style={{ color: 'red', marginTop: 20 }}>{error}</p>
      )}
    </div>
  );
};

export default Modeling;
