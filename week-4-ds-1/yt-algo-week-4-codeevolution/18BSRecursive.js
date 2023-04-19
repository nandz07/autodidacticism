
function bSearch(arr,t){
    return rec(arr,t,0,arr.length-1)
 
 }
 function rec(arr,t,l,r){
    if(l>r){
        console.log(l);
        console.log(r);
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
 console.log(bSearch([-5,2,10,4,6],10));
 console.log(bSearch([-5,2,10,4,6],6));
 console.log(bSearch([-5,2,10,4,6],-20));
 
 // O(logn)