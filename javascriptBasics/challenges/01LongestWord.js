// find longest strin

function larg(str){
    let arr=str.split(' ')
    let lstr=''
    for(let a of arr){
        if(a.length>lstr.length){
            lstr=a
        }
    }
    return lstr
}

console.log(larg('this is a function by nandakumar'));