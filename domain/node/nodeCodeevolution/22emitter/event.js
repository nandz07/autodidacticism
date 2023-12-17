const PizzaShop=require('./emitter')
const Drink = require('./drink')
 
const pizzaShop =new PizzaShop()
const drink =new Drink()

pizzaShop.on("order-pizza",(size,topping)=>{
    console.log(`order received ! baking a ${size} pizza with ${topping}`);
    drink.serveDrink(size)
})


pizzaShop.order("large",'mushrooms')
console.log('--------------------');
pizzaShop.order("small",'egg')
pizzaShop.displayOrderNumber()
