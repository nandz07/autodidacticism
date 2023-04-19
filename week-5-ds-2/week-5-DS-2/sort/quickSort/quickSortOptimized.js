function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let left=[]
    let right=[]
    let pivot=arr[arr.length-1]
    for (const element of arr.slice(0,arr.length-1)){
        element<pivot?left.push(element):right.push(element)
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr=[1,8,4,2,5]
res=quickSort(arr)
console.log(res);