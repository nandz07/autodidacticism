const PizzaShop=require('./emitter')
 
const pizzaShop =new PizzaShop()

pizzaShop.on("order-pizza",(size,topping)=>{
    console.log(`order received ! baking a ${size} pizza with ${topping}`);
})


pizzaShop.order("large",'mushrooms')
pizzaShop.displayOrderNumber()
