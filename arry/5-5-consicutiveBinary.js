// print heighest value of consicutive nnumber 1 present in a binary array

let c=1
let t=1
arr=[1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1]
for(let i=0;i<arr.length;i++){
    if(arr[i]==1 && arr[i+1]==1){
        c++
    }else{
        if(c>t){
            t=c
        }
        c=1
    }
}
console.log(t);