function createConstantArray() {
    const arr = [1, 2];
    arr.push(3);
    console.log(arr); // Output: [1, 2, 3]
  
    // arr = [4, 5]; // This will throw an error because reassignment to a const variable is not allowed
    }
    
    createConstantArray();
  