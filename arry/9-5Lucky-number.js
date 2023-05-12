function luck(nums){
    let r=-1
    let g=0
    for(let i=0;i<nums.length;i++){
        let c=0
        for(let j=0;j<nums.length;j++){
            if(nums[i]==nums[j]){
                c++
            }
        }
        if(c==nums[i]){
            r=c
        }
        if(r>g){
            g=r
        }
    }
    if(r!=-1){
        return g
    }else{
        return r
    }
}

let arr=[1,2,2,3,3,3,5,5,5,5,3]

let res=luck(arr)
console.log(res);