const { resolve, reject } = require("promise");

function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("nandu")
        }, 3000);
    })
}
function getMobile(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(72380)
        }, 2000);
    })
}

// ---- it can take 2+3 =5 sec
// getMobile().then((num)=>{
//     console.log(num);
//     return getName()
// }).then((name)=>{
//     console.log(name);
// })

// -------- it complete with in 3 sec
// Promise.all([getName(),getMobile()]).then((result)=>{
//     console.log(result)
// })


// ----without wait it will print a waiting promise

// function getUser(){
//     let name=getName()
//     console.log(name);
// }
// getUser()

// ------ with async and await we can solve this problem

async function getUser(){
    let name =await getName()
    console.log(name);
    let mobile =await getMobile()
    console.log(mobile);
}//to solve tim issue we can use promise all
getUser()

