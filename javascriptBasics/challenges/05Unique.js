let str1='qpweoirulasdkfjmzcvb'
let str2='sadfadsfadsf'

function unique(str){
    let set=new Set()
    for(let val in str)
    {
        set.add(str[val])
    }
    return str.length==set.size
}
let res1=unique(str1)
let res2=unique(str2)

console.log(res1);
console.log(res2);