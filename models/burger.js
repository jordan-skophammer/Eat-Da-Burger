var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
      });
    },
    insert: function(cols, vals, cb) {
      orm.create(cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(colVal, condition, cb) {
      orm.update(colVal, condition, function(res) { n
        cb(res);
      });
    }
  };

  module.exports = burger;