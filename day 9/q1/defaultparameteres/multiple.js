function calculateTotal(price, tax = 0.05) {
    return price + (price * tax);
  }
  
  console.log(calculateTotal(100));         
  console.log(calculateTotal(100, 1));    
  