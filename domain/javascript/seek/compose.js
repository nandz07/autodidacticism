// Function f: Adds 2 to the input
const f = function (x) {
    return x + 2;
  };
  
  // Function g: Multiplies the input by 3
  const g = function (x) {
    return x * 3;
  };
  
  // Composing f and g: f(g(x))
  const composedFunction = function (x) {
    // Evaluate g(x) first, then apply f to the result
    const resultOfG = g(x);
    const resultOfF = f(resultOfG);
    return resultOfF;
  };
  
  // Usage
  console.log(composedFunction(2)); 
  