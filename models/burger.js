var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
      orm.all(function(res) {
        cb(res);
        console.log(res)
      });
    },
    insert: function(cols, vals, cb) {
      orm.create(cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(colVal, burgerId, cb) {
      orm.update(colVal, burgerId, function(res) { n
        cb(res);
      });
    }
  };

module.exports = burger;