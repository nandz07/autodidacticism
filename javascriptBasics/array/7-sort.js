
let names=['nusair','abrar','irfan','manaf']

names.sort()
console.log(names);


// in number sorting we need to set a call back function ,sort only sort string order 

let arr=[74,18,10,5,84,24,105]

arr.sort(compare)
function compare(a,b){
    return a-b
}

console.log(arr);

// for decending 
// arr.sort((a,b)=>{
//    return b-a
// })

let products=[
    {
        name:'lap',
        price:5000
    },
    {
        name:'mobile',
        price:2000
    },
    {
        name:'desktop',
        price:3000
    },
]


products.sort((a,b)=> a.price-b.price)

console.log(products);

let a=function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
console.log(a(arr));