let p1=new Promise((res,rej)=>{
res('you are passed')
})

let p2=new Promise((res,rej)=>{
    // res('you are passed')
rej(`you are failed`)
})


const resPromise = Promise.allSettled([p2,p1])
resPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

// resPromise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })