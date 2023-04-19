function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i-1
        let numberToInsert=arr[i]
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=numberToInsert
    }
    return arr
}
let arr=[7,4,6,2,5]
let res=insertionSort(arr)
console.log(res);