import React, { useState } from 'react';
import './App.css'; // Ensure you have styling from the CSS file
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';


function App() {
  const [selectedPage, setSelectedPage] = useState('Crimes');
  const [selectedBottomPage, setSelectedBottomPage] = useState('Dashboard');

  return (
    <div className="App">
      <TopNavbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {/* Add your content components here */}
      <BottomNavbar selectedBottomPage={selectedBottomPage} setSelectedBottomPage={setSelectedBottomPage} />
    </div>
  );
}

export default App;
