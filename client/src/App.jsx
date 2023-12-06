import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/HomePage';
import MapPage from './assets/mapComponent';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} /> {/* Add this route for the MapPage */}
         
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
