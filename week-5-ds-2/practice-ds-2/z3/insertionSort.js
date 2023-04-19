// function insertionSort(arr){
//     for (let i=1;i<arr.length;i++){
//         let j=i-1
//         let numToInsert=arr[i]
//         while(j>=0&& arr[j]>numToInsert){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=numToInsert
//     }
//     return arr
// }

var arr=[5,4,3,6,8]
var res=insertionSort(arr)
console.log(res);

function insertionSort(arr){
    for(let i=1;i<arr.length;i++)
    {
        let j=i-1
        let numToInsert=arr[i]
        while(j>=0&& arr[j]>numToInsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numToInsert
    }
    return arr
}

