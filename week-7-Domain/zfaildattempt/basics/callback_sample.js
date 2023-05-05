// // var dt=new Date()
// // console.log('hello');
// // for (let i = 0; i < 1000; i++) {
// //    console.log(i);
    
// // }
// // console.log("end");
// // var diff=new Date()-dt
// // console.log(diff);


// // synco and async
// function longTask(millSec){
//     dt=new Date()
//     while((new Date()-dt)<=millSec){

//     }
//     console.log(new Date()-dt);
// }
// function showEnd(){
//     console.log(`end`);
// }
// console.log(`started`);
// // longTask(4000)
// setTimeout(showEnd,2000)
// // console.log(`end`);
// console.log(`started`);
// // longTask(4000)
// setTimeout(showEnd,2000)
// // console.log(`end`);
// console.log(`started`);
// setTimeout(showEnd,2000)
// // longTask(4000)
// // console.log(`end`);


// call back

function hai(){
    console.log(`hai`);
}
function hello(callBack){
    console.log(`going for call back`);
    callBack()
}

hello(hai)