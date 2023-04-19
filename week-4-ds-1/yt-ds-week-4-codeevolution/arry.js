const arr=[1,2,3,4,"nandu"]
arr.push(100)
console.log(arr)
arr.unshift(16)
console.log(arr)
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
var ma=arr.map((currentValue)=>{
    return currentValue+10
})
var fil=ma.filter((currentValue)=>{
    return currentValue>12
})
console.log(ma);
console.log(fil);

// arr.reduce((total,num)=>{
//     // console.log(total)
//     console.log(total-num)
// })

var t = "hai "
var tt="nandu "
console.log(t.concat(tt));
console.log(arr);
console.log(arr.slice(2));