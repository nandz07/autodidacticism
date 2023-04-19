function bubbleSort(arr){
    do{
        swapped=false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
                swapped=true
            }
        }
    }while(swapped)
    return arr
}
arr=[7,5,9,3,4,1]
let res=bubbleSort(arr)
console.log(res);