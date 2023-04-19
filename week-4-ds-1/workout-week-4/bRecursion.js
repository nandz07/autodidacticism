
function bSearch(arr,t){
    return rec(arr,t,0,arr.length-1)
}
function rec(arr,t,l,r){
    if(l>r){
        return -1
    }
    let mid=Math.floor((l+r)/2)                                                                                      
    if(t==arr[mid]){
        return mid
    }
     if(t<mid){
        r=mid-1
        return rec(arr,t,l,r)
    }else{
        l=mid+1
        return rec(arr,t,l,r)
    }
}

console.log(bSearch([1,2,3,4,5,6],5));