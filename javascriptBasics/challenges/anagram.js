let str1='race'
let str2='care'

function anagram(){

    let cleanStr1=str1.replace(/\s/g,'').toLowerCase()
    let cleanStr2=str2.replace(/\s/g,'').toLowerCase()
    
    if(str1.length!=str2.length){
        return false
    }
    let sortedStr1=cleanStr1.split('').sort().join('')
    let sortedStr2=cleanStr2.split('').sort().join('')
    if(sortedStr1 === sortedStr2){
        return true
    }else{
        return false
    }
}


let res=anagram(str1,str2)
console.log(res);