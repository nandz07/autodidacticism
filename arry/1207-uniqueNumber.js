var uniqueOccurrences = function(arr) {
    let map=new Map()
    let set=new Set()

    for(e of arr){
        if(map.has(e)){
            map.set(e,map.get(e)+1)
        }else{
            map.set(e,1)
        }
    }
    for(e of map.values()){
        if(set.has(e)) return false
        set.add(e)
    }
    return true
};

let arr = [1,2]
let res=uniqueOccurrences(arr)
console.log(res);

