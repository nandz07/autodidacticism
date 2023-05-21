let arr=[1,2,3,4,5]
arr.fill(0,2,4)
console.log(arr);
arr.fill(0)
console.log(arr);

function fillArray(n){
    return Array(n).fill(0).map((_,idx)=>idx+1)
}

console.log(fillArray(10));
