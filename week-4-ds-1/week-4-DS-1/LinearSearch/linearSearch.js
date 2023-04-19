 function linearSearch(arr,target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==target){
            return i
        }
        
    }
    return -1
 }

 let res=linearSearch([-5,2,10,4,6],10)

 if(res>0){
    console.log(res);
 }else{
    console.log(`not found`);
 }