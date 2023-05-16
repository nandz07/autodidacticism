
var checkPossibility = function(nums) {
    let c=0
    for(let i=1;i<nums.length;i++){
      if(nums[i]<nums[i-1]){
        if(i-2>=0 && nums[i]<nums[i-2]){
          nums[i]=nums[i-1]
        }
        c++
      }
    }
    console.log(c)
    return c<=1
};


let arr=[2,4,3,2]
let res=checkPossibility(arr)
console.log(res);