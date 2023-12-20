const http =require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('home page')
    }else if(req.url==="/slowpage"){
        for(let i=0;i<1e9;i++){}
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('slow page')
    }
})
server.listen(3000,()=>{
    console.log(`server runs on port 3000`);
})