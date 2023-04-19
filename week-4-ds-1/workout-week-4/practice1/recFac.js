function rec(n){
    if(n==0){
        return 1
    }
    return n*rec(n-1)
}

b=rec(5)
console.log(b);