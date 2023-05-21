const arr=[7,8,2,3,4,5]

const numbDouble=arr.map((value,index,arr)=>{
    return 2*value
})
console.log(arr);
console.log(numbDouble);
const numIndex=arr.map((value,index,arr)=>{
    return value*index
})
console.log(numIndex);

// use 
const product=[
    {
        name:'laptop',
        price:8000,
        count:3
    },
    {
        name:'mobile',
        price:6000,
        count:2
    },
    {
        name:'desktop',
        price:10000,
        count:5
    },
]

let total=product.map(item=>({
    name:item.name,
    total:item.price*item.count
}))
let t=product.map(item=>item.price*item.count)

console.log(total);
console.log(t);


// convert array of string to numbers

const str=['1','2','3','4']
// const number=str.map(item=>Number(item))
const number=str.map(Number)
console.log(number);