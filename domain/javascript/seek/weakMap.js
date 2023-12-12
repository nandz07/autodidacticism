let weakmap=new WeakMap()

let obj1={}
let obj2={}
let obj3={}

weakmap.set(obj1,`obj1 value`)
weakmap.set(obj2,`obj2 value`)

console.log(weakmap.get(obj1));
weakmap.delete(obj1)

console.log(weakmap.get(obj1));