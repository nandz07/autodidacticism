// var http=require('http')

// http.createServer(server).listen(7000)

// function server(req,res){
//     res.write('server')
//     res.end()
// }



var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer((req,res)=>{

    var u=url.parse(req.url,true)
    console.log(u.pathname);

    // if(req.url==='/'){
    if(u.pathname==='/'){

        fs.readFile('sample.html',(err,data)=>{
            res.writeHead(200,{'content-Type':'text/html',})
            res.write(data)
            res.end()
        })
    }else if(u.pathname==='/signup'){
        fs.readFile('signup.html',(err,data)=>{
            res.writeHead(200,{'content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(u.pathname==='/signupaction'){
        // fs.readFile('signup.html',(err,data)=>{
            console.log(u.query);
            console.log(u.query.name);
            res.writeHead(200,{'content-Type':'text/html'})
            res.write("<h1>"+u.query.name+"</h1>")
            res.end()
        // })
    }
    else{
        res.writeHead(400,{'content-Type':'text/html'})
        res.write('error')
        res.end()
    }
}).listen(7000,()=>console.log(`server started`))