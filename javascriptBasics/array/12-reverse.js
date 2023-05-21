const num=[1,2,3,4,5]

// num.reverse()
// console.log(num);

// --------- avoid ariginal array change
// const newArray=num.concat().reverse()
// console.log(newArray);
// console.log(num);
const newArray=[...num].reverse()
console.log(newArray);
console.log(num);

// to reverse a string it can be used 

let str='coding is fun'

let resu=str.split('').reverse().join('')
console.log(resu);
