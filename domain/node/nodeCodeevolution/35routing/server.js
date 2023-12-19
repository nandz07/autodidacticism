const http=require('node:http')
const fs=require('node:fs')

const server=http.createServer((req,res)=>{
    try {
    //    res.end(req.url)
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type':'text/palin'})
            res.end('home page')
            break
        case '/about':
            res.writeHead(200,{'Content-Type':'text/palin'})
            res.end('about page')
            break
        case '/api':
            res.writeHead(200,{'Content-Type':'application/json'})
            res.end(JSON.stringify({
                firstName:'nanda',
                lastName:'kumar'
            }))
            break
        default:
            res.writeHead(404)
            res.end('Page not found')

    }
        
       
    } catch (error) {
        console.log(error);
    }
    
})

server.listen(3000,()=>{
    console.log(`server run on port 3000`);
})