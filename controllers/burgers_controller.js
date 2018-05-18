var express = require("express");
var router =  express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var burgerObject = {
        burger: data
      };
      console.log(data);
      res.render("index", burgerObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.insert(["name"], [req.body.name], function(result) {

      res.json({ id: result.insertId });
    });
    burger.all(function(data) {
      var burgerObject = {
        burger: data
      };

      res.render("index", burgerObject)
    })
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log(condition);
  
    cat.update({
      burger: req.body.name
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  module.exports = router;