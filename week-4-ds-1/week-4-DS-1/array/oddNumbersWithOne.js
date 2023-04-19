let arr=[1,2,3,4,5]

function oddToOne(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            arr[i]=1
        }
    }
    return arr
}

res=oddToOne(arr)
console.log(res);