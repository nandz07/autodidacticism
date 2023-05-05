var http=require('http')
var url=require('url')
var fs=require('fs')

http.createServer((req,res)=>{
    var q=url.parse(req.url,true)
    console.log(q);
}).listen(3000)