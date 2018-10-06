var db = require("../models");

module.exports = function (app) {
  // Get all markers
  app.get("/api/markers", function (req, res) {
    db.markers.findAll({}).then(function (dbmarkers) {
      res.json(dbmarkers);
    });
  });

  app.post("/text", (req, res) => {
    //res.send(req.body);
    //console.log(req.body);
    const number = req.body.number;
    const text = req.body.text;
    
    nexmo.message.sendSms(
      '19493407484', number, text, { type: 'unicode' },
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
    );
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
