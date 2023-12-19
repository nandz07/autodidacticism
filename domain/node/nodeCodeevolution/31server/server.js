const http=require('node:http')
const fs=require('node:fs')

const server=http.createServer((req,res)=>{
    try {
        const superHero={
            firstName:'bruce',
            lastName:'wayne'
        }
        // res.writeHead(200,{'Content-Type':'application/json'})
        // res.end(JSON.stringify(superHero))
        // html response 
        const html=fs.readFileSync('index.html','utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        // res.end(html)
        // --------- create stream ----------
        fs.createReadStream(__dirname+'/index.html').pipe(res)
    } catch (error) {
        console.log(error);
    }
    
})

server.listen(3000,()=>{
    console.log(`server run on port 3000`);
})