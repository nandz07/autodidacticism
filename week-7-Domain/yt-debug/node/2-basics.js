// setInterval(() => {
//     console.log(`hai`);
// }, 1000);

// setTimeout(() => {
//     console.log(`here i'am`);
// }, 5000);

// let intraval=setInterval(() => {
//     console.log(`hai`);
// }, 1000);

// setTimeout(() => {
//     clearInterval(intraval)
// }, 5000);


// console.log(__filename);
// console.log(__dirname)

// -------------- path module in node -----------

// let path=require('path')
// console.log(path);

// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.dirname(__filename));
// console.log(path.parse(__filename));
// console.log(path.parse(__filename).ext);

// console.log(path.join(__dirname,"api","script.js"));


// ------------- file system -----------
let path=require('path')
let fs=require('fs')
// console.log(fs);
// -------- create file 
// fs.mkdir(path.join(__dirname,"/api2"),{},(err)=>{
    // if(err) throw err
//     fs.mkdir(path.join(__dirname,"/api2/api3"),{},(err)=>{
//         if(err) throw err
//         fs.mkdir(path.join(__dirname,"/api2/api3/index.html"),{},(err)=>{
//             if(err) throw err
//         })
//     })
// })
// - -------- delete file
// fs.rmdir(path.join(__dirname,"/api2"),{recursive:true},(err)=>{
//     if(err) throw err
// })
// ----------- write file

const user='juniad'
// fs.writeFile(path.join(__dirname,"/api2","api.txt"),`user:${user}`,(err)=>{
//     if(err) throw err
// })
// fs.appendFile(path.join(__dirname,"/api2","api.txt"),`\nuser:${user}`,(err)=>{
//     if(err) throw err
// })

// utf8 used to convert buffer bites to noraml data
// fs.readFile(path.join(__dirname,"/api2","api.txt"),"utf8",(err,data)=>{
//     if(err) throw err
//     console.log(data);
// })

// - ---------- event ------------

const eventEmitter=require('events')// it is a class

const emitter=new eventEmitter()
emitter.on("message",(data)=>{
    console.log(data.text);
})
emitter.on("logout",(data)=>{
    console.log('hai');
    console.log(data.text);
})

emitter.emit("message",{text:"user logged"})
emitter.emit("logout",{text:"user logout"})


