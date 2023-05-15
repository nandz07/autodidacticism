// const arr=[1,2,3,4,5,6]
// const num=arr.filter((value,index,arr)=>{
//     return value % 2==0
// })
// console.log(num);

// example on array of objects



// const people=[
//     {
//         name:'nandu',
//         age:25
//     },
//     {
//         name:'amer',
//         age:17
//     },
//     {
//         name:'akshy',
//         age:26
//     }
// ]

// const adult=people.filter(person=> person.age>18)
// console.log(adult);


// can also used to remove duplicate from an array
// ---- but athor method is available


const number=[1,2,3,2,1,3,3,5,4,6]

const nums=number.filter((value,index,arr)=>{
    return number.indexOf(value)===index
})
console.log(nums);

