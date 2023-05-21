let str='123456'

let arr=Array.from(str,mpfun)

function mpfun(x){
    return Number(x)
}

console.log(arr);

// remove duplicate value

let a=[1,2,3,4,5,3,2,4,1,5]
let se=new Set(a)
anew=Array.from(se)
console.log(se);
console.log(anew);

// can also do for string 