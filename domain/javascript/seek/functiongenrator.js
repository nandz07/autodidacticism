function* abc(){
    for(let val of a){
        yield val
    }
}

let generator=abc(1,2,3,4)
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);