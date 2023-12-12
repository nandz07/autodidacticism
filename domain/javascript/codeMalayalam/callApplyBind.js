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


function greet(name){
    console.log(name);
}

function greetMe(){
    let name='nandu'
    greetfun(name)
}

greetMe(greet)