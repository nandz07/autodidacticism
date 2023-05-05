var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {


  res.render('./admin/admin', { title: 'Admin',name: 'Nandakumar' });
});

module.exports = router;
