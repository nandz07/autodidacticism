

function isPowerOfTwo(n){
    // for(let i=n;i>=1;i--){
    //     if(n/2==1 && n%2==0){
    //         return true
    //     }
    //     n/=2
    //     // console.log(i)
    // }
    // return false

    // if(n<1){
    //     return false
    // }
    // while(n>1){
    //     if(n%2!=0){
    //         return false
    //     }
    //     n/=2
    //     // reduce by half
    // }
    // return true

    // power of two bitwise

    if(n<1){
        return false
    }
    return n & (n-1)
    // input size 1 = O(1)

}

// input size reduce by half = O(logn)

console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(18));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(5));
