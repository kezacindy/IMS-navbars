import React from 'react';

function BottomNavbar({ selectedBottomPage, setSelectedBottomPage }) {
  const bottomPages = ['Dashboard', 'Compare Maps', 'Time Profile Maps', 'App for Edit', 'Form'];

  return (
    <nav className="bottom-navbar">
      <ul className="bottom-nav-links">
        {bottomPages.map((page) => (
          <li
            key={page}
            className={`bottom-nav-item ${selectedBottomPage === page ? 'bottom-selected' : ''}`}
            onClick={() => setSelectedBottomPage(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNavbar;
