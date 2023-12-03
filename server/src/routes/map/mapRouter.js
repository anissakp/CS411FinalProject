const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve the map.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'map.html'));
});

module.exports = router;
