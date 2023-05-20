//  let g=-Infinity
 
//  let arr=[1,2,3,4,5]
// for(let k=0;k<arr.length;k++){
//     for(let i=k;i<arr.length;i++){
//         let s=0
//         for(let j=k;j<=i;j++){
//             if(j!=arr.length-1 || k!=0){
//                 s+=arr[j]
//                 // console.log(arr[j]);
//             }
//         }
//         // console.log('------');
//         if(s>g){
//             g=s
//         }
//     }
// }
// console.log(g);


// ------ time complexity issue

// var maxSubArray = function(arr) {
//     let g=-Infinity
//     let n=arr.length
//     for(let i=0;i<n;i++){
//         for(let j=i;j<=n;j++){
//             let sum=0
//             for(let k=i;k<=j;k++){
//                 sum+=arr[k]
//                 console.log(arr[j]);
//             }
//             if(sum>g){
//                 g=sum
//             }
//         }
//     }
    
// return g
// };


// leetcode

var maxSubArray = function(nums) {
    let max = -Infinity;
     let meh = 0;
     for (let i = 0; i < nums.length; i++) {
         meh += nums[i];
         if (meh > max) {
             max = meh;
         }
         if (meh < 0) {
             meh = 0;
         }
     }
     return max;
 };

let arr=[-5,-1,6,7,-13,16,-3]

let res=maxSubArray(arr)
console.log(res);
