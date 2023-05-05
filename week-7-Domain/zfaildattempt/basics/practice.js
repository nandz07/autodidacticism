var read=require('readline-sync')
var value1=read.question('enter a number')
// console.log(value);
var value2=read.question('')
console.log(value1,value2);
let t=''
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        t+=`*`
    }
    t+='\n'
}
console.log(t);