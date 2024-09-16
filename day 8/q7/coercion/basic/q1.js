function checkCoercion(a, b) {
    console.log(`Loose equality (${a} == ${b}):`, a == b);
  
    console.log(`Strict equality (${a} === ${b}):`, a === b);
  }
 
  checkCoercion("5", 5); 