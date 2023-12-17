const fs=require('node:fs/promises')

fs.readFile('file.txt','utf-8')
.then((data)=>console.log(data))
.catch(err=>console.log(err))

// async await 
 async function readFile(){
    try {
        let data =await fs.readFile('file.txt','utf-8')
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
 }
 readFile()