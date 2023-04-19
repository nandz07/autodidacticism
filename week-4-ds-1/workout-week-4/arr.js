let arr=[1,1,1,2,2,3,4,4,4,5]

let res=arr.filter((curr,index,arr)=>{
    return index===arr.indexOf(curr)
})
console.log(res);

// let one,two,three,four
[one,two,three,four]=[1,2,3,4]
console.log(one);