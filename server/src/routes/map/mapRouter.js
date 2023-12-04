const express = require('express');
const router = express.Router();
const path = require('path');
const locationModel = require('../../models/locationsModel');

// Route to serve the map.html file
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'map.html'));
});

// Route to get all locations
router.get('/locations', async (req, res) => {
  try {
    const locationData = await locationModel.find();
    res.json(locationData);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

module.exports = router;
