var express = require('express');
var router = express.Router();
var MongoClient=require('mongodb').MongoClient


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });


// const client = new MongoClient('mongodb://localhost:27017');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  console.log(req.body);
  MongoClient.connect('mongodb://localhost:27017/user',function(err,client){
    console.log("inside");
    if(err){
      console.log('error');
    }else{
      console.log('db connected');
      // client.db('crossroads').collection('user').insertOne(req.body)
    }
  })
  console.log('hai');
  res.send(`send`)
  res.end()
})


module.exports = router;
