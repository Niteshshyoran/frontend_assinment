function getNestedProperty(obj) {
    return obj?.a?.b?.c?.d;
  }
  
  const obj1 = { a: { b: { c: { d: "Deep value" } } } };
  const obj2 = { a: { b: {} } };
  
  console.log(getNestedProperty(obj1)); 
  console.log(getNestedProperty(obj2)); // Output: undefined
  