const { isUtf8 } = require('buffer');
const fs=require('fs')

const files=fs.readdirSync('./')
console.log(files);

fs.readFile('./3app.js','utf8',(err,files)=>{
    if(err) console.log('Err',err);
    else console.log('Result',files);
})
