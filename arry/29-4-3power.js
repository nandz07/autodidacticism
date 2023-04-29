// self
// let arr=[]
// let n=3

// for(let i=0;i<=n;i++){
//     let t=3
//     for(let j=1;j<i;j++){
//         t*=3
//     }
//     if(i==0){
//         arr[i]=1
//     }else{
//         arr[i]=t
//     }
// }
// console.log(arr);

// net 
let curr=1
let arr=[]
let n=3
for(let i=0;i<=n;i++){
    arr[i]=curr
    curr=curr*3
}
console.log(arr);