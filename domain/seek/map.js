let map = new Map()

map.set('one',1)
map.set('two',2)
map.set('three',3)
console.log(map);

map.forEach((value,key)=>{
    console.log(key,value);
})

for(let  [key,value] of map){
    console.log(key +'-'+value);
}


for(const key of map){
    console.log(key );
}

console.log(map);



let ac=Object.entries(obj).filter((cv)=>{
    return typeof(cv[1])==='number'
})
