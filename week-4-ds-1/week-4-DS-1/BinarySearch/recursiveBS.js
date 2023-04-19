
function bSearch(arr,t){
    return rec(arr,t,0,arr.length-1)
 
 }
 function rec(arr,t,l,r){
    if(l>r){
        return -1
    }
    let m=Math.floor((l+r)/2)
    if(t==arr[m]){
        return m
    }
    if (t>arr[m]){
        l=m+1
       return rec(arr,t,l,r)
    }
    else{
        r=m-1
       return rec(arr,t,l,r)
    }
 }
 console.log(bSearch([1,2,3,4,5,6],6));