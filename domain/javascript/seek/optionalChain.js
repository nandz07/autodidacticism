// Without optional chaining
let person = {
    name: "John",
    address1: {
      city: "New York",
      zipcode: "10001"
    }
  };
  
  // Attempting to access a nested property without optional chaining
//   let city = person.address.city; // This might throw an error if address is undefined
//   console.log(city);
  
  // With optional chaining
  let cityWithOptionalChaining = person?.address?.city;
  console.log(cityWithOptionalChaining); // Outputs: "New York"
  
  // Another example with function calls
  let person2 = {
    getName: function() {
      return "Alice";
    }
  };
  
  let name = person2.getName?.(); // No error even if getName is undefined
  console.log(name); // Outputs: "Alice"
  