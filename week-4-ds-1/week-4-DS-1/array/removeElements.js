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