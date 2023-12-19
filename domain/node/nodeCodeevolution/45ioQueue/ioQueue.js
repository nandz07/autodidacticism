const fs=require('fs')


fs.readFile(__filename,()=>{
    console.log(`inside read file`);
})
setTimeout(() => console.log(`set timeout `), 2);

