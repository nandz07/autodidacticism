arr=[1,2,3,4,5]

function abc(arr,n){

    if(n<0){
        return null
    }
    
    // console.log(arr[n]);
    return abc(arr,n-1)
}

abc(arr,4)