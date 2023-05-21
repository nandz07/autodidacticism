let nums=[1,2,3,4,5]

// const deleted=nums.splice(2,3,6,7)
// console.log(deleted);
// console.log(nums);

// if we need to add element at position without delete

const deleted=nums.splice(2,0,6,7)
console.log(deleted);
console.log(nums);