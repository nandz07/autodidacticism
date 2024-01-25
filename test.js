function * geneFunc(){

    yield 10
}

let res=geneFunc().next()
console.log(res);

