// let arr=[2,33,2,3,5,1,6]
let arr=[1,2,3,4,5,15]

let sorted=arr.sort((a,b)=>{
   return a-b
})

let l=sorted.pop()

let sum=sorted.reduce((acc,cv)=>{
    return acc+cv
})

console.log(sum===l);