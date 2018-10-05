var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.markers.findAll({}).then(function(dbMarkers) {
      res.render("index", {
        msg: "Welcome!",
        examples: JSON.stringify(dbMarkers)
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/markers/:id", function(req, res) {
    db.markers.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("markers", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
