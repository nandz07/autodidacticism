function api1(callback,value){
    setTimeout(() => {
        callback(value)
    }, 1000);
}

function api2(callback,value){
    setTimeout(() => {
        callback(value)
    }, 1000);
}

api1((value1)=>{
    api2((value2)=>{
        console.log(value1+value2);
    },2)
},5)


console.log("start")
function  getDataFromApi(){
    setTimeout(()=>{
        return 'Debugmedia';
    },3000)
}
console.log(getDataFromApi());

console.log('end');