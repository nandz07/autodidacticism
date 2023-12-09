function greet(name){
    console.log(`hai ${name}`);
}

function higherOrderFunction(callback){
    const name=`nandu`
    callback(name)
}

higherOrderFunction(greet)