const fs=require('node:fs')

const readableStream=fs.createReadStream('file.txt',{
    encoding:'utf-8',
    highWaterMark:2
})
const writeableStream=fs.createWriteStream('abc.txt')

readableStream.on('data',(chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk)
})