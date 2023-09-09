
// const promise1 = new Promise((resolve, reject) => {
//     // setInterval(() => {
//     resolve(["javascript", "java"])
//     // }, 1000);

// })

//     // promise1.then((response)=>{
//     //     console.log(response);
//     // })

//     // const fetchData=async ()=>{
//     //     const response=await promise1;
//     //     console.log(response);
//     // }
//     // fetchData()

//     // IIFE -imediatly invoked function expression
//     (async function (){
//         const response = await promise1;
//         console.log(response);
//     })();

const promise1 = new Promise((resolve, reject) => {
    // setInterval(() => {
    // resolve(["javascript", "java"])
    reject('failed')
    // }, 1000);
});

(async function (){
    try {
        const response = await promise1;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    
})();
