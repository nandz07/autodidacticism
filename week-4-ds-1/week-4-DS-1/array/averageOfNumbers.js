function avr(arr){
    let s=0
    for (let i = 0; i < arr.length; i++) {
        s+=arr[i]
        
    }
    return s/arr.length
}

arr=[1,2,3,4,5]
res=avr(arr)
console.log(res);