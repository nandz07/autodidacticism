
function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let numtoInsert=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>numtoInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numtoInsert
    }
}

arr=[4,3,6,5]
insertion(arr)
console.log(arr);

// O(n`2)