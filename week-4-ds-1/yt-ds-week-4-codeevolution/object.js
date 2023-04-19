const obj={
    name:"nandu",
    age:25,
    "key3":true,
    display:function(){
        console.log(`${this.name} is ${this.age} year old`)
    }
}

console.log(obj.name);
console.log(obj['age']);
console.log(obj.key3);

obj.hobby="football"
console.log(obj);
delete obj.hobby
console.log(obj);
obj.display()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = Object.keys(obj);
const values = Object.values(obj);
console.log(keys);
console.log(values);

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
    console.log(key);
  }