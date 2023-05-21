let arr=[2,3,4,8,6]

arr.forEach((item,index,arr) => {
    console.log(`arr[${index}] => ${item}`);
    // console.log(arr);
});

// sum of an array
let sum=0
arr.forEach(item=>sum+=item)
console.log(sum);

let letter=['a','b','a','c']

let count = new Map()

letter.forEach(item=>{
    if(count[item]){
        count[item]++
    }else{
        count[item]=1
    }
})
// console.log(count);


// ---------practice ------------
let b=[]
b=arr.forEach((item,index,arr) => {
    console.log('hai');
    console.log(2*item);
    b.push(item)
    return 2*item
    // console.log(arr);
});
console.log(b);
// console.log(numbDouble);

const numbDoubl=arr.map((value,index,arr)=>{
    return 2*value
})
console.log(numbDoubl);