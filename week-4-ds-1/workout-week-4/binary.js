function bSearch(arr,t){
    let left =0
    let right=arr.length
    while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(t===mid){
            return mid
        }
        else if(t<mid){
            right=mid-1
        }
        else{
            left=mid+1
        }
    }
    return -1
}

console.log(bSearch([1,2,3,4,5,6],5));