var db = require("../models");

module.exports = function(app) {
  // Get all markers
  app.get("/api/marker", function(req, res) {
    db.markers.findAll({}).then(function(dbmarkers) {
      res.json(dbmarkers);
    });
  });

  // Create a new example
  app.post("/api/marker", function(req, res) {
    db.markers.create(req.body).then(function(dbmarkers) {
      res.json(dbmarkers);
    });
  });

  // Delete an example by id
  app.delete("/api/marker/:id", function(req, res) {
    db.markers.destroy({ where: { id: req.params.id } }).then(function(dbmarkers) {
      res.json(dbmarkers);
    });
  });
};
