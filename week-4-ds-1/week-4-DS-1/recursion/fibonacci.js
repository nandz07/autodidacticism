
function rec(n){
    if(n<2){
        return n
    }
   return rec(n-1)+rec(n-2)
    
}

console.log(rec(6))
