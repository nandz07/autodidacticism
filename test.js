// Creating a target object
const targetObject = {
  name: "John",
  age: 25,
};

// Creating a proxy for the target object
const proxy = new Proxy(targetObject, {
  // Intercepting property access (reading)
  get: function (target, property, receiver) {
    console.log(`Getting ${property}`);
    return target[property];
  },

  // Intercepting property assignment (writing)
  set: function (target, property, value, receiver) {
    console.log(`Setting ${property} to ${value}`);
    target[property] = value;
    // Note: You must return true to indicate that the assignment was successful.
    return true;
  },
});

// Accessing properties through the proxy
console.log(proxy.name); // Output: Getting name
proxy.age = 26; // Output: Setting age to 26
console.log(proxy.age); // Output: Getting age
