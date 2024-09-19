function extractNestedData(obj) {
    const { name: { first, last }, age } = obj;
    console.log(`First Name: ${first}, Last Name: ${last}, Age: ${age}`);
  }
  
  const person = { name: { first: "John", last: "Doe" }, age: 30 };
  extractNestedData(person);
 
  