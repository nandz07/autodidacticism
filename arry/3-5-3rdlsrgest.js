arr=[3,4,5,7,8,1,3]
let min=0
let l1=min
let l2=min
let l3=min
console.log(l3);

for(let i=0;i<arr.length;i++){
    if(arr[i]>l1){
        l3=l2
        l2=l1
        l1=arr[i]
        console.log(arr[i]);
    }else if(arr[i]>l2){
        l3=l2
        l2=arr[i]
    }else if(arr[i>l3]){
        l3=arr[i]
    }
}
if(l3!=min){
    console.log("l3");
    console.log(l3);
}else if(l2!=min){
    console.log("l2");
    console.log(l2);
}else{
    console.log("l1");
    console.log(l1);
}