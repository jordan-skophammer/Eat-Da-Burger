var express = require("express");
var burger = require("../models/burger.js");
var router =  express.Router;

router.get("/", function(req, res) {
    burger.all(function(data) {
      var burgerObject = {
        burger: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    cat.create(["name"], [req.body.name], function(result) {

      res.json({ id: result.insertId });
    });
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