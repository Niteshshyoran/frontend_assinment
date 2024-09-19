function getNestedPropertyWithDefault(obj) {
    return obj?.a?.b?.c?.d ?? "Not Available";
  }
  
  const obj1 = { a: { b: { c: { d: "Deep value" } } } };
  const obj2 = { a: { b: {} } };
  
  console.log(getNestedPropertyWithDefault(obj1)); 
  console.log(getNestedPropertyWithDefault(obj2)); // Output: "Not Available"
  