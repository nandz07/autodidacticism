module.exports= function validation(req,res,next){
    if(req.token){
        console.log(req.token);
        console.log('token approved');
        next()
        return
    }
    console.log(`no token`);
    res.send('<h1>no auth<h1/>')
}