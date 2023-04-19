
function bSearch(arr,target){
    let left=0
    let right=arr.length

    while(left<=right){
        let midd=Math.floor((left+right)/2)
        if(target===arr[midd]){
            return midd
        }
        if(target<midd){
            right=midd-1
        }
        else{
            left=midd+1
        }
    }
    return -1
}
let arr=[-5,2,4,6,10];
let result=bSearch(arr,4)
if(result>0){
    console.log(result);
}else{
    console.log(`value not in the list`);
}
