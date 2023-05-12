// function sum(a,b,callback){
//     if(a==0){
//         var err="first num is zero"
//     }
//     callback(a+b,err)
// }
// function multiply(a,b,callback){
//     callback(a*b)
// }
// function divide(a,b,callback){
//     callback(a/b)
// }
// sum(10,20,(sum,err)=>{
//     if (err) throw err
//     console.log(sum);
//     multiply(sum,sum,(product)=>{
//         console.log(product);
//         divide(product,product,(res)=>{
//             console.log(res);
//         })
//     })
    
// })

//  if call back is gone like this there can be an ocarance of "call back hell"
// so it can be solved by promise


const promoise=require('promise')

function add(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num1==0){
            reject("first num is zero")
        }
        resolve(num1+num2)
    })
} 

function multiply(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2==0){
            reject('numbers ar zero')
        }
        resolve(num1*num2)
    })
}

add(10,20).then((sum)=>{
    console.log(sum);
    return multiply(sum,sum)
}).then((prodect)=>{
    console.log(prodect);
})
.catch((err)=>{
    // throw err
    console.log(err);
})
// is called chaining