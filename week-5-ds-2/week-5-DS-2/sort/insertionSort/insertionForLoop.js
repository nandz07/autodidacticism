function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        for(j=i-1;j>=0 && arr[j]>numberToInsert;j--){
            arr[j+1]=arr[j]
        }
        arr[j+1]=numberToInsert
    }
    return arr
}

let arr=[7,3,6,1,2]
res=insertionSort(arr)
console.log(res);