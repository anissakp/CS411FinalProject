//use locations model

const userGetAllLocations = (req, res) => {
    Location.find({}, (err, locations) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Error fetching locations' });
      } else {
        res.json(locations);
      }
    });
};



module.exports = {
    userGetAllLocations
}