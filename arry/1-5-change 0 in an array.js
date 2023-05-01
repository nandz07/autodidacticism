let arr=[1,3,2,0,5]
let n=5
let flag

for(let i=0;i<n;i++){
    flag=0//strik
    for(let j=0;j<n;j++){
        if(arr[j]==i+1){
            flag=1
            break
        }
    }
    if(flag==0){
        arr[i]=i+1
    }
}

console.log(arr);