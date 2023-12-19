const http=require('node:http')
const fs=require('node:fs')

const server=http.createServer((req,res)=>{
    try {
        const name ='hai'
        res.writeHead(200,{'Content-Type':'text/html'})
        let html=fs.readFileSync('index.html','utf-8')
        html=html.replace("{{name}}",name)
        res.end(html)
        
       
    } catch (error) {
        console.log(error);
    }
    
})

server.listen(3000,()=>{
    console.log(`server run on port 3000`);
})