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
        connection.query("INSERT INTO burgers (" + col + ", eaten) VALUES ('" + val + "', false);", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    update: function(colVal, burgerID, cb) {
        connection.query("UPDATE burgers SET" + colVal+ "WHERE id =" + burgerID + ";", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    }
};

module.exports = orm;
