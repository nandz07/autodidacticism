var thirdMax = function (nums) {
    let min = 0
    let l1 = min
    let l2 = min
    let l3 = min

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > l1) {
            l3 = l2
            l2 = l1
            l1 = nums[i]
        } else if (nums[i] > l2) {
            l3 = l2
            l2 = nums[i]
        } else if (nums[i]> l3) {
            l3 = nums[i]
        }
    }
    if (l3 != min) {
        return l3
    } else if (l2 != min) {
        return l2
    } else {
        return l1
    }
}
let nums=[1,2]
let res=thirdMax(nums)
console.log(res);
