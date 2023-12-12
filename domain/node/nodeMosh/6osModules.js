const os=require('os')
console.log(os.totalmem());

var totalmemory=os.totalmem()
var freememory=os.freemem()

console.log(`total memeory ${totalmemory}`);
console.log(`free memeory ${freememory}`);

console.log(`used memory ${totalmemory-freememory}`);