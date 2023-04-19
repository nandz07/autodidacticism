// function bubbleSort(arr){
//     do{
//         swaped=false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//                 swaped=true
//             }
//         }
//     }while(swaped)
// }

// arr=[8,3,3,6,7,4]
// bubbleSort(arr)
// console.log(arr);

// function bubbleSort(arr){
//     do{
//         swapped = false
//         for(let i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//                 swapped=true
//             }
//         }
//     }while(swapped)
// }

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
}
arr=[8,3,3,6,7,4]
bubbleSort(arr)
console.log(arr);