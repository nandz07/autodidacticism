const EventEmitter=require('node:events')

class PizzaShop extends EventEmitter{
    constructor(){
        super()
        this.orderNumer=0
    }

    order(size,topping){
        this.orderNumer++
        this.emit("order-pizza",size,topping)
    }
    displayOrderNumber(){
        console.log(`current order number is ${this.orderNumer}`);
    }
}

module.exports=PizzaShop