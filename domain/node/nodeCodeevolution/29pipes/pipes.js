const fs=require('node:fs')
const zlib = require('node:zlib')

const gzip=zlib.createGzip()

const readableStream=fs.createReadStream('file.txt',{
    encoding:'utf-8',
    highWaterMark:2
})

readableStream.pipe(gzip).pipe(fs.WriteStream('abc.txt.gz'))

const writeableStream=fs.createWriteStream('abc.txt')

// readableStream.on('data',(chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk)
// })

readableStream.pipe(writeableStream)