function insertionSort(arr,n=arr.length){
    if(n<=1){
        return
    }
    insertionSort(arr,n-1)
    const last=arr[n-1]
    let j=n-2
    while(j>=0 && arr[j]>last){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=last
    return arr
}

let arr=[7,3,5,4,6]
res=insertionSort(arr)
console.log(res);