const fs=require('node:fs')

const fileData=fs.readFileSync('file.txt','utf-8')
console.log(fileData);

fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

fs.writeFileSync('greet.txt','hello world')
fs.writeFile('greet.txt',' hello Nandakumar',{flag:'a'},(err,)=>{
    if(err){
        console.log(err);
    }else{
        console.log('file written');
    }
})