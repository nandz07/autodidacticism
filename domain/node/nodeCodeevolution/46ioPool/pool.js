const fs=require('fs')


fs.readFile(__filename,()=>{
    console.log(`inside read file`);
})
process.nextTick(()=> console.log(`next tick 1`))
Promise.resolve().then(()=>console.log(`promise 1`))
setTimeout(() => console.log(`set timeout `), 0);
setImmediate(()=>console.log(`immediate 1`))
let l=0
for(let i=0;i<1e9;i++){
    if(i>l){
        l=i
    }
}
console.log(l);
console.log(999999999+1);