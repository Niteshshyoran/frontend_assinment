function coerceInConditionals(value) {
    if (value) {
      console.log(`The value "${value}" is considered truthy.`);
    } else {
      console.log(`The value "${value}" is considered falsy.`);
    }
  }
  
  
  coerceInConditionals([]);