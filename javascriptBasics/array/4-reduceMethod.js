// // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


// // let arr=[1,2,3,4,5,6]

// // let sum=arr.reduce((accumulator,value)=>{
// //     return accumulator+value
// // },100)

// // console.log(sum);

// // --------- can also use to get largest value in an arry but prefer there is other better method----------

// let arr=[1,2,3,4,5,6]

// let sum=arr.reduce((accumulator,value)=>{
//     if(accumulator>value){
//         return accumulator
//     }else {
//         return value
//     }
// },-Infinity)

// console.log(sum);

const store=[
        {
            product:'laptop',
            value:1000,
            count:3
            
        },
        {
            product:'phone',
            value:4000,
            count:1
        },
        {
            product:'desktop',
            value:2000,
            count:4
        },
    ]
const totalValue=store.reduce(
    (acc,item)=> acc+item.value *item.count,0
    )
console.log(totalValue);
