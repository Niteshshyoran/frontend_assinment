function complexExpression(a, b, c) {
    let AdditionAb = a + b; 
    let productCB = c * b;

  
    if (AdditionAb > productCB) {
      return "addition of a and b is greater than product of c and b";
    } else if (AdditionAb < productCB) {
      return "Product of c and b is greater than additon of a and b";
    } else {
      return "Both are equal";
    }
  }
  
    console.log(complexExpression(2, 3, 4)); 