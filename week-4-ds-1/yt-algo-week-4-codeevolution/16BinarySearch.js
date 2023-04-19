
// function bSearch(arr,t){
//     l=arr.length
//     for(i=0;i<l;i++){

//         m=arr.length/2
//         if(t==arr[m]){
//             return m
//         }else if(t>arr[m]){
//             i=m+1
//         }else{
//             l=m
//         }
//     }
// }

// console.log(bSearch([-5,2,10,4,6],10));
// console.log(bSearch([-5,2,10,4,6],6));
// console.log(bSearch([-5,2,10,4,6],-20));

function bSearch(arr,t){
   let l=0
   let r=arr.length

   while(l<=r){
    // console.log(l);
        // console.log(r);
    let m=Math.floor((l+r)/2)
    if(t==arr[m]){
        return m
    }
    if(t<m){
        r=m-1
    }else{
        l=m+1
    }
   }
   return -1

}

console.log(bSearch([-5,2,10,4,6],10));
console.log(bSearch([-5,2,10,4,6],6));
console.log(bSearch([-5,2,10,4,6],-20));

// O(logn)