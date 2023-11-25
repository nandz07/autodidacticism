// function sum(a,b,c){
//     return a+b+c
// }
// // console.log(sum(1,2,3));

// function curry(fun){
//     return function(a){
//         return function(b){
//             return function(c){
//                 return fun(a,b,c)
//             }
//         }
//     }
// }

// const currySum=curry(sum)
// console.log(currySum(2)(3)(5));

// let sum1=curry(sum)
// let sum2=sum1(1)
// let sum3=sum2(3)
// let sum5=sum3(5)
// console.log(sum5);


const curr = (a) => {
    return (b) => {
        return (c) => {
            return a+b+c
        }
    }
}

let res=curr(1)(2)(3)
console.log(res);

const myDish= inc1=>inc2=>inc3=>
`${inc1} , ${inc2} , ${inc3}`

let foodOfNandan=myDish('pattiri')('kuruma')('apple')
console.log(foodOfNandan);

let foodOfAkshy=myDish('bread')('avil')('banana')
console.log(foodOfAkshy);

