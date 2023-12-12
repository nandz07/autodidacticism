function outer() {
    const x = 10;
  
    function inner() {
      console.log(x); // inner can access x from the outer scope
    }
  
    return inner
  }
  
  outer()();
  