var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const value=["akshy","amal","nuzair"]

  const person={name:"nandakumar",comments:{comment:"sample comment",date:new Date()},admin:false}

  res.render('index', { title: 'Express',name: 'Nandakumar',value ,person});
});

module.exports = router;
