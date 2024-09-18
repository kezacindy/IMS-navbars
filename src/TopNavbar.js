import React from 'react';

import logo from './images/logo.png';

function TopNavbar({ selectedPage, setSelectedPage }) {
  const pages = ['Crimes', 'Incidents', 'Accidents', 'Analytics', 'Operations', 'Flash Report', 'Deployment Map'];

  return (
    <nav className="top-navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo"/>
        <h1>IMS</h1>
      </div>
      <ul className="nav-links">
        {pages.map((page) => (
          <li
            key={page}
            className={`nav-item ${selectedPage === page ? 'selected' : ''}`}
            onClick={() => setSelectedPage(page)}
          >
            {page}
          </li>
        ))}
      </ul>
      <button className="login-btn">Log out</button>
    </nav>
  );
}

export default TopNavbar;
