function deepFreeze(obj) {
    // Get the property names defined on the object
    var propNames = Object.getOwnPropertyNames(obj);
  
    // Freeze properties before freezing self
    propNames.forEach(function(name) {
      var prop = obj[name];
  
      // Freeze prop if it is an object
      if (typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
  
    // Freeze the object itself
    return Object.freeze(obj);
  }
  
  // Example usage
  var myObject = {
    prop1: 'value1',
    prop2: {
      nestedProp1: 'nestedValue1',
      nestedProp2: 'nestedValue2'
    }
  };
  
  deepFreeze(myObject);
  
  // Attempting to modify the frozen object will result in an error
  // myObject.prop1 = 'new value'; // This will throw an error
  // myObject.prop2.nestedProp1 = 'new nested value'; // This will throw an error
myObject.prop2.nestedProp1='hai'  
console.log(myObject);



console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));