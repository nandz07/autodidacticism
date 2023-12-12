// ----- without call back

// console.log("start")
// function  getDataFromApi(){
//     setTimeout(()=>{
//         return 'Debugmedia';
//     },3000)
// }
// console.log(getDataFromApi());

// console.log('end');

// ----------- with call back 
// console.log("start")
// function  getDataFromApi(callback){
//     setTimeout(()=>{
//         callback('Debugmedia');
//     },3000)
// }
// getDataFromApi((value)=>{
//     console.log(value);
// });

// console.log('end');
// ------- then why promise?
// -------- more then one call back
console.log("start")
function  getDataFromApi(callback){
    setTimeout(()=>{
        callback(5);
    },1000)
}
function  getDataFromApi2(callback){
    setTimeout(()=>{
        callback(5);
    },1000)
}
function  getDataFromApi3(callback){
    setTimeout(()=>{
        callback(5);
    },1000)
}
getDataFromApi((value)=>{
    getDataFromApi2((api2)=>{
        getDataFromApi3((api3)=>{
            console.log(value+api2+api3)
        })
    })
});

console.log('end');