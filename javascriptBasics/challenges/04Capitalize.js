

function capitalize(str){
    let arr=str.split(' ')
    let res=arr.map((cv)=>{
        // let firstLetter=cv.slice(0,1)
        // let restWord=cv.slice(1)
        // return firstLetter.toUpperCase()+restWord
        return cv.charAt(0).toUpperCase()+cv.slice(1)
    })
    return res.join(' ')
}

let str='i am a super hero'
let res=capitalize(str)
console.log(res);
