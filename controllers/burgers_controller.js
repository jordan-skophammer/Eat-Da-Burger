var express = require("express");
var router =  express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.all(function(data) {
      var burgerObject = {
        burger: data
      };
      res.render("index", burgerObject);
    });
  });
  
router.post("/api/burgers", function(req, res) {
  burger.insert(["name"], [req.body.name], function(result) {

    res.json({ id: result.insertId });

    if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
  });

});
  
  router.put("/api/burgers/:id", function(req, res) {

    var burgerID = req.params.id;

    burger.update(burgerID, function(result) {

      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }

    });
  });

  router.delete("/api/burgers/:id", function(req, res) {

    var burgerID = req.params.id;

    burger.delete(burgerID, function(result) {

      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;