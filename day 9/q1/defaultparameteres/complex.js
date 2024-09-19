function calculateDiscount(price, discount = price * 0.1) {
    return price - discount;
  }
  
  console.log(calculateDiscount(100));