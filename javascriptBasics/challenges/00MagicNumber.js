let arr=[1,2,3,2,1,4,5,6,4,5,6,4,4]

let map=new Map()

for(let i=0;i<arr.length;i++){
    if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }else{
        map.set(arr[i],1)
    }
}
// console.log(map);

for(let [key,val] of map){
    if(key===val){
        console.log(key);
    }
}

