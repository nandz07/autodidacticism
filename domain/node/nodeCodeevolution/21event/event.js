const EventEmitter=require('node:events')

const emmiter=new EventEmitter()

emmiter.on("order-pizza",(size,topping)=>{
    console.log(`order received ! baking a ${size} pizza with ${topping}`);
})

emmiter.on('order-pizza',(size)=>{
    if(size === "large"){
        console.log("serving comlimentary drink");
    }
})

console.log('shop open');
emmiter.emit('order-pizza',"large","mushroom")
emmiter.removeAllListeners('order-pizza');

emmiter.addListener('order-pizza',(size)=>{
    if(size === "large"){
        console.log("serving comlimentary drink");
    }
})

emmiter.emit('order-pizza',"large","mushroom")