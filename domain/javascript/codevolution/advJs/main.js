// let arr=[0,1,2]
// arr[1.5]=50
// arr['abc']=300
// console.log(arr[1.5]);
// console.log(arr);
// console.log(arr.length);

// for(let i=0;i<arr.length+1;i++){
//     console.log(arr[i]);
// }

//----------- from video ----------------

let  a=10
function outer(){
    let b=20
    function inner(){
        let c=30
        console.log(a,b,c);
    }
    inner()
}
outer()