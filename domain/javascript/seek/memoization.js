// Basic memoization function
function memoize(func) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (!cache[key]) {
        // If the result is not in the cache, compute it and store in the cache
        cache[key] = func.apply(this, args);
    }
    console.log(cache);
  
      return cache[key];
    };
  }
  
  // Example function to be memoized
  function expensiveOperation(n) {
    console.log(`Performing expensive operation for ${n}`);
    return n * 2;
  }
  
  // Apply memoization to the expensive operation
  const memoizedExpensiveOperation = memoize(expensiveOperation);
  
  // Test the memoized function
  console.log(memoizedExpensiveOperation(5));  // Performs the expensive operation and logs the result
  console.log(memoizedExpensiveOperation(5));  // Returns the cached result without recomputing
  console.log(memoizedExpensiveOperation(10)); // Performs the expensive operation for a new input
  console.log(memoizedExpensiveOperation(10)); // Returns the cached result for the new input
  