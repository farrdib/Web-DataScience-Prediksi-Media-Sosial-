import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar dengan link navigasi

import Home from './Pages/Home';
import About from './Pages/About';
import DataOverview from './Pages/DataOverview';
import EDA from './Pages/EDA';
import DataCleaning from './Pages/DataCleaning';
import Modeling from './Pages/Modeling';
import ResultVisualization from './Pages/ResultVisualization';
import Insights from './Pages/Insights';
import Download from './Pages/Download';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dataoverview" element={<DataOverview />} />
        <Route path="/eda" element={<EDA />} />
        <Route path="/datacleaning" element={<DataCleaning />} />
        <Route path="/modeling" element={<Modeling />} />
        <Route path="/resultvisualization" element={<ResultVisualization />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </>
  );
}

export default App;
