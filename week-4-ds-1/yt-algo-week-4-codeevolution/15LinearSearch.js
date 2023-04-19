function lSearch(arr,t){
    for(i=0;i<arr.length;i++){
        if(arr[i]==t){
            return i
        }
    }
    return -1
}

console.log(lSearch([-5,2,10,4,6],10));
console.log(lSearch([-5,2,10,4,6],6));
console.log(lSearch([-5,2,10,4,6],-20));

// O(n)