const http=require('http')
const fs=require('fs')
const path=require('path')

const server=http.createServer((req,res)=>{
    
    if(req.url==='/'){
    fs.readFile(path.join(__dirname,"view","index.html"),"utf8",(err,data)=>{

            if(err) throw err
            res.writeHead(200,{'content-Type':'text/html'})
            console.log(req.url);
            res.end(data)
        })
    }
    if(req.url==='/contact'){
    fs.readFile(path.join(__dirname,"view","contact.html"),"utf8",(err,data)=>{

            if(err) throw err
            res.writeHead(200,{'content-Type':'text/html'})
            console.log(req.url);
            res.end(data)
        })
    }

})

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>console.log(`server run on ${PORT}`))