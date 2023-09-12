const myObj={
    a:1,
    b:2,
    c:()=>{
        console.log(this)
    }
}

myObj.c()
console.log(myObj);

let abc=myObj.c
abc()