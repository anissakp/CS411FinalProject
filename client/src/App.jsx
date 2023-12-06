import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/HomePage';
import MapPage from './assets/mapPage';
import LocationPage from './assets/LocationPage'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} /> 
          <Route path="/location/:playlistId" element={<LocationPage/>} />
        </Routes> 
      </div>
    </Router>
  );
};

export default App;