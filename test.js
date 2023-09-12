// let arr=[1,2,3,1,5,5]

// for(let i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j] && arr[i]!=-1){
//             console.log(arr[i]);
//             arr[j]=-1
//         }
//     }
// }

function api1(callback,val){
    setTimeout(() => {
        callback(val)
    }, 1000);
}

api1((val1)=>{
    console.log(val1);
},5)

