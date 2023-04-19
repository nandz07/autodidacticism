function insertionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let NumberToInsert=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>NumberToInsert){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=NumberToInsert
    }
}

let arr=[2,1,-6,3,7]
insertionSort(arr)
console.log(arr);