var db = require("../models");

module.exports = function (app) {
  // Get all markers
  app.get("/api/markers", function (req, res) {
    db.markers.findAll({}).then(function (dbmarkers) {
      res.json(dbmarkers);
    });
  });

  app.post("/text", (req,res) => {
    res.send(req.body);
    console.log(req.body);
    });

  // Create a new example
  app.post("/api/markers", function (req, res) {
    db.markers.create(req.body).then(function (dbmarkers) {
      res.json(dbmarkers);
    });
  });

  // Delete an example by id
  app.delete("/api/markers/:id", function (req, res) {
    db.markers.destroy({ where: { id: req.params.id } }).then(function (dbmarkers) {
      res.json(dbmarkers);
    });
  });
};
