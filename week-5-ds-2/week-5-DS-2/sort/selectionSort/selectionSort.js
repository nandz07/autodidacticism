function selectionSort(arr){
    const len=arr.length
    for(let i=0;i<len;i++){
       let indexOfMin=i
       for(let j=i+1;j<len;j++){
           if(arr[j]<arr[indexOfMin]){
               indexOfMin=j
           }
       }
       if(indexOfMin!==i){
           let temp=arr[indexOfMin]
           arr[indexOfMin]=arr[i]
           arr[i]=temp
       }
    }
    return arr
   }
   let arr=[5,3,4,7,2]
   let res=selectionSort(arr)
   console.log(res);