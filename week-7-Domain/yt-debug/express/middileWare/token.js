module.exports=(req,res,next)=>{
    console.log("creating token");
        const TOKEN='123'
        req.token=TOKEN
        next()
}