const swap = (arr,index1,index2) =>{
    [arr[index1],arr[index2]] = [arr[index2],arr[index1]]
}
const selectionSort = (arr) =>{
    const len = arr.length
    for(let i = 0; i < len ;i++){
        let indexofMin = i
        
        for(let j = i+1; j < len ; j++){
            if(arr[j] <  arr[indexofMin]){
                indexofMin = j
            }
        }
        if(indexOfMin!==i){
            swap(arr,indexofMin,i)
            }
    }
    return arr
}
let arr=[5,3,4,7,2]
let res=selectionSort(arr)
console.log(res);
