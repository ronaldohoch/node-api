var express = require('express');
var connection = require('../database/connection');
var router = express.Router();

router.get('/', function(req, res, next) {
    var results = {"home":true}
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
});

router.get('/users', function(req, res, next) {
  connection.query('SELECT * from users',function(err,results,fields){
      if (err) throw err;
      res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

module.exports = router;