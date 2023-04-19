// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left =arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return merge(mergeSort(left),mergeSort(right))
// }
// function merge(left,right){
//     let sortArray=[]
//     while(left.length && right.length){
//         if(left[0]<=right[0]){
//             sortArray.push(left.shift())
//         }else{
//             sortArray.push(right.shift())
//         }
//     }
//     return ([...sortArray,...left,...right])
// }
var arr=[5,4,3,6,8]
var res=mergeSort(arr)
console.log(res);

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let midd=Math.floor(arr.length/2)
//     let left=arr.slice(0,midd)
//     let rigth=arr.slice(midd)
//     return merge(mergeSort(left),mergeSort(rigth))
// }

// function merge(left,right) {
//     let sortArray=[]
//     while(left.length &&right.length){
//         if(left[0]<=right[0]){
//             sortArray.push(left.shift())
//         }else{
//             sortArray.push(right.shift())
//         }
//     }
//     return ([...sortArray,...left,...right])
// }

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let midd=Math.floor(arr.length/2)
    let left =arr.slice(0,midd)
    let right=arr.slice(midd)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sortedArray=[]
    while(left.length && right.length){
        if(left[0]<=right[0]){
            sortedArray.push(left.shift())
        }else{
            sortedArray.push(right.shift())
        }
    }
    return ([...sortedArray,...left,...right])
}
