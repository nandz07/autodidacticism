// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

var arr=[5,4,3,6,8]
var res=quickSort(arr)
console.log(res);

function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[0]
    let left =[]
    let right =[]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>pivot){
            right.push(arr[i])
        }
        else{
            left.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}