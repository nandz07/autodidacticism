function avr(arr1,arr2){
    let newArr=[]
    let j=0,s=0
    let l=arr1.length+arr2.length
    for(let i=0;i<l;i++){
        if(i<arr1.length){
            newArr[i]=arr1[i]
            s+=newArr[i]
        }else{
            newArr[i]=arr2[j]
            s+=newArr[i]
            j++
        }
    }
    console.log(s/l);
}

arr1=[1,2,3,4,5]
arr2=[6,7,8,9,10]
avr(arr1,arr2)
