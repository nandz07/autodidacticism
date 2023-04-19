function prime(n)
{
    if(n<2){
        return false
    }
    let flag=0
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return `${n} is not a prime number`
        }
    }
    return `${n} is prime number`
}
console.log(prime(5));
console.log(prime(1));
console.log(prime(6));

// Big-O = O(sqrt(n))