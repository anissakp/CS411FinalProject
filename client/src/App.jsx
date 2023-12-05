import React from 'react';
<<<<<<< HEAD
import MapPage from '../src/assets/mapPage';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <MapPage />
    </div>
=======
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './assets/HomePage';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
>>>>>>> 16db76e4e39f9e01771f26fd2da883fb1cf718c4
  );
};

export default App;
