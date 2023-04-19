
function reverse(arr){
    let temp
    for(let i=0;i<arr.length/2;i++){
        temp=arr[arr.length-1-i]
        arr[arr.length-1-i]=arr[i]
        arr[i]=temp
    }
    return arr
}
let arr=[1,2,3,4,5]
let res=reverse(arr)
console.log(res);