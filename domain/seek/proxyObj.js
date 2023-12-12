// https://www.youtube.com/watch?v=hI4AyjNnUzQ
// https://chat.openai.com/c/d07d878f-e10c-445b-8713-d8e55f07244f

const targetObject={
    name:"John",
    age:23
}

const proxy=new Proxy(targetObject,{
    get:function(target,property,receiver){
        console.log(`setting ${property}`);
        return target[property]
    },

    set:function(target,property,value,receiver){
        console.log(`setting ${property} to ${value}`);
        target[property]=value
        return true
    },
    
})

console.log(proxy.name);
proxy.age=26
console.log(proxy.age);
console.log(targetObject.age);
proxy.genter='male'
console.log(targetObject.genter);
console.log(targetObject);