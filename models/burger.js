var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    insert: function(cols, vals, cb) {
      orm.insert(cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(burgerID, cb) {
      orm.update(burgerID, function(res) { 
        cb(res);
      });
    },
    delete: function(burgerID, cb) {
      orm.delete(burgerID, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;