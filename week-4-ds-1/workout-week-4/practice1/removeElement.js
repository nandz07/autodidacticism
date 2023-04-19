// var removeElement = function(nums, val) {
//     let k=0
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i]==val){
//             for (let j = i; j < nums.length; j++) {
//                  nums[j]=nums[j+1]
//             }
//             nums.length--
//         }
//     }
//     return nums
// };

var removeElement = function(nums, val) {
    let p = 0;
        while(p <= nums.length){
            if(nums[p] === val){
            nums.splice(p,1);
            } else{
            p++;
            }
        }
  
    return nums.length
};

res=removeElement([3,2,2,3],3)
console.log(res);