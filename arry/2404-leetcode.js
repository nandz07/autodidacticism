// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

var mostFrequentEven = function(nums) {
    let l=-1
    let lc=0
    for(let i=0;i<nums.length;i++){
        let c=0
        for(let j=0;j<nums.length;j++){
            if(nums[i]==nums[j] && nums[i]%2==0){
                c++
            }
        }
        if(c>lc){
            lc=c
            l=nums[i]
        }else if(c==lc){
            if(nums[i]<l){
                l=nums[i]
            }
        }
    }
    if(l!=-1){
        return l
    }else{
        return -1
    }
};

let arr=[1,3,5,7]
let res=mostFrequentEven(arr)
console.log(res);