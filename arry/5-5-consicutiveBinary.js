// print heighest value of consicutive nnumber 1 present in a binary array

// let c=0
// let t=0
// // arr=[1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1]
// arr=[1,1,0,1,1,1]
// // arr=[0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==1 && arr[i+1]==1 || i==arr.length){
//         c++
//     }else{
//         if(c>t){
//             t=c+1
//         }
//         c=0
//     }
// }
// console.log(t);

// https://leetcode.com/problems/max-consecutive-ones/description/

var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let current = 0;
  
    for (let i = 0; i < nums.length; i++) {
      // Reset current max if value at current index is zero, increment otherwise.
    //   current = (nums[i] === 0) ? 0 : current + 1;
      if(nums[i]===0){
        current=0
      }else{
        current++
      }
      
      // Store current max to max, if current iteration found max consecutive 1s.
    //   max = (current > max) ? current: max;
      if(current>max){
        max=current
      }
    }
  
    return max;
};
arr=[1,1,0,1,1,1]
let r=findMaxConsecutiveOnes(arr)
console.log(r);