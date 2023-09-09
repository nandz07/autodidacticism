// -------- error handling with catch

// const promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         rej('failed')
//     },3000)
// })

// promise.then((response)=>{
//     console.log(response)
// }).catch((error)=>{
//     console.log(error);;
// })


// function getDataFromApi(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num)
//         }, 1000);
//     })
// }

// function getDataFromApi2(num){
//     return new Promise((resolve, reject) => {
//         resolve(num)
//     })
// }

// getDataFromApi(5).then((response)=>{
//     return getDataFromApi2(response+5)
// }).then((response)=>{
//     console.log(response);
// })

// ------------- All

// const promise1 = new Promise((resolve,reject)=>{
//     resolve(["javascript","java"])
// })
// const promise2=new Promise((resolve,reject)=>{
//     resolve(["React","Angular"])
// })

// promise1.then((res)=>{
//     console.log(res);
// })

// promise2.then((res)=>{
//     console.log(res);
// })


const promise1 = new Promise((resolve,reject)=>{
    resolve(["javascript","java"])
})
const promise2=new Promise((resolve,reject)=>{
    resolve(["React","Angular"])
    // reject('failed')
})
// const allpromise=Promise.all([promise1,promise2])
// const allpromise=Promise.allSettled([promise1,promise2])
// const allpromise=Promise.any([promise1,promise2])
const allpromise=Promise.race([promise1,promise2])

allpromise.then(res=>{
    // console.log(res.flat(Infinity));
    console.log(res);
}).catch(err=>{
    console.log(err);
})