var getNoZeroIntegers = function(n) {
    let int1=n-1
    let int2=1

    let hasZero=int =>int.toString().includes('0')
    while (hasZero(int1) || hasZero(int2)) {
        int1 = int1 - 1;
        int2 = int2 + 1;
    }
    
    return [int1, int2];
};

let n=25
let res=getNoZeroIntegers(n)
console.log(res);