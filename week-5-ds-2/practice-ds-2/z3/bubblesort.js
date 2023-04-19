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

var arr=[5,4,3,6,8]
var res=bubbleSort(arr)
console.log(res);