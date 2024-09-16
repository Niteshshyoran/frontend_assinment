function isArrayOrObject(value) {
    if (Array.isArray(value)) {
      return "The value is an array.";
    } else if (typeof value === "object" && value !== null) {
      return "The value is an object.";
    } else {
      return `The value is of type: ${typeof value}`;
    }
  }
  
  console.log(isArrayOrObject([1, 2, 3]));      