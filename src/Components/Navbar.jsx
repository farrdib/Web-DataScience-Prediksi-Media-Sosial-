import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logopcr from '../assets/Images/logo-pcr.png'; // Import logo PCR

const Navbar = () => (
  <nav className="navbar">
    {/* Logo PCR di bagian kiri */}
    <div className="navbar-logo">
      <img src={logopcr} alt="Logo Politeknik Caltex Riau" />
    </div>
    <ul>
      <li><NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Beranda</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Tentang</NavLink></li>
      <li><NavLink to="/dataoverview" className={({ isActive }) => (isActive ? 'active' : '')}>Data Overview</NavLink></li>
      <li><NavLink to="/eda" className={({ isActive }) => (isActive ? 'active' : '')}>EDA & Visualisasi</NavLink></li>
      <li><NavLink to="/datacleaning" className={({ isActive }) => (isActive ? 'active' : '')}>Data Cleaning</NavLink></li>
      <li><NavLink to="/modeling" className={({ isActive }) => (isActive ? 'active' : '')}>Modeling</NavLink></li>
      <li><NavLink to="/resultvisualization" className={({ isActive }) => (isActive ? 'active' : '')}>Visualisasi Hasil</NavLink></li>
      <li><NavLink to="/insights" className={({ isActive }) => (isActive ? 'active' : '')}>Insight & Rekomendasi</NavLink></li>
      <li><NavLink to="/download" className={({ isActive }) => (isActive ? 'active' : '')}>Download</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
