function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    return  merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    const sortedArr=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArr.push(left.shift())
        }else{
            sortedArr.push(right.shift())
        }
    }
    return ([...sortedArr,...left,...right])
}
let str="hai hello"
let arr=Array.from(str)
res=mergeSort(arr)
console.log(res.toString());