let str='hello hai'

function reverse(str){
    let revStr=''
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i]
    }
    return revStr
}
let a=reverse(str)
console.log(a)
