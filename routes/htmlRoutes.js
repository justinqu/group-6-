var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
    // db.markers.findAll({}).then(function(dbMarkers) 
    // {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: JSON.stringify(dbMarkers)
    //   });
    // });
  });


  //loads index page
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Load example page and pass in an example by id
  app.get("/markers/:id", function(req, res) {
    db.markers.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("markers", {
        example: dbExample
      });
    });
  });

  app.get("/text", function(req, res) {
    res.render("text");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

