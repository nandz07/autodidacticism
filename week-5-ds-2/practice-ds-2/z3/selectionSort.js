function selectionSort(arr){
    let len=arr.length
    for(let i=0;i<len;i++){
        let indOfMin=i
        for(let j=i+1;j<len;j++){
            if(arr[j]<arr[indOfMin]){
                indOfMin=j
            }
        }
        if(indOfMin!=i){
            [arr[i],arr[indOfMin]]=[arr[indOfMin],arr[i]]
        }
    }
    return arr
}
let arr=[5,3,4,7,2]
let res=selectionSort(arr)
console.log(res);