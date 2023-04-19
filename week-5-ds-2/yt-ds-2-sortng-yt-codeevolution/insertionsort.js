function insertionSort(arr){
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert=arr[i]
        let j=i-1
        while (j>=0 && arr[j]>numberToInsert) {
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numberToInsert
    }
    // return arr
}

let arr=[2,1,-6,3,7]
insertionSort(arr)
console.log(arr);

// function insertionSort(arr){
//     for(let i=0;i<arr.lengt;i++){
//         let numberToInsert=a[i]
//         j=i-1
//         while (j>=0&& arr[j]>arr[j+1]) {
//             arr[j+1]=arr[j]
//             j--
//         }
        
//     }
// }