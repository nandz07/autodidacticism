// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// function merge(leftArr,rightArr){
//     let sortArr=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<=rightArr[0]){
//             sortArr.push(leftArr.shift())
//         }else{
//             sortArr.push(rightArr.shift())
//         }
//     }
//     return[...sortArr,...leftArr,...rightArr]
// }

// arr=[2,1,7,4,6,5]
// res=mergeSort(arr)
// console.log(res);



