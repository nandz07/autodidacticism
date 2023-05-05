// var http=require('http')
// var fs=require('fs')

// http.createServer((req,res)=>{
//     res.writeHead(200,{'contet-Type':'text/html'})
//     res.end('hai')
// }).listen(3000)

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
//   }).listen(3000);

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('index.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(3000);

var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'content-Type':'text/html'})
        res.write(data)
        res.end()
    })
}).listen(3000)

// var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  });