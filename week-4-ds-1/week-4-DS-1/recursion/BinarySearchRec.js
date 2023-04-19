
function bSearch(arr, target) {
    return rec(arr,target,0,arr.length-1)
}

function rec(arr,target,left,right){
    if(left>right){
        return -1
    }
    let m=Math.floor((left+right)/2)
    if(target==arr[m]){
        return m
    }
    if(target>arr[m]){
        left=m+1
        return rec(arr,target,left,right)
    }
    else{
        right=m-1
        return rec(arr,target,left,right)
    }
}

res=bSearch([1,2,3,4,5,6],5)
console.log(res);