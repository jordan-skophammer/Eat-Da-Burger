var connection = require("../config/connection.js");

var orm = {
        all: function(cb) {
        connection.query("SELECT * FROM burgers;", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    
    insert: function(col, val, cb) {
        connection.query("INSERT INTO burgers (" + col + ") VALUES" + val + ";", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    update: function(colVal, condition, cb) {
        connection.query("UPDATE burgers SET" + colVal+ "WHERE" + condition + ";", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;
