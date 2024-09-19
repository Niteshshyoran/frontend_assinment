function callOptionalMethod(obj) {
    return obj?.greet?.();
  }
  
  const obj1 = { greet: () => "Hello!" };
  const obj2 = { name: "John" };
  
  console.log(callOptionalMethod(obj1)); 
  console.log(callOptionalMethod(obj2)); // Output: undefined
  