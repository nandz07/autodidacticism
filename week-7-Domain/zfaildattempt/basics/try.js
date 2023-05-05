try{
    let a=0
    if(a===0){
        throw "an error created"
    }
}catch(err){
    console.log(err);
}finally{
    console.log("hai");
}