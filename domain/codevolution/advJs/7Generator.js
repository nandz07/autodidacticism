function* fun(a,b){

    yield a+b
    yield a*b
}

let gen=fun(1,2)
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);