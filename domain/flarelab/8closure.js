function a(){
    let ab=20
    function b(){
         console.log(ab);
    }
    return b
}

let res=a()
res()