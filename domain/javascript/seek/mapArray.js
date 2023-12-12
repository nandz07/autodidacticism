let arr=[1,2,3,4,5,3,5,6,2,6,7,23,5,7,2]

let res=arr.reduce((acc,curr)=>{
    if(acc[curr]){
        acc[curr]++
    }else{
        acc[curr]=1
    }
    return acc
},{})

let unique=[]
for(let val in res){
    if(res[val]!=1){
        unique.push(val)
    }
}
console.log(unique);