function loopWithVarAndLet() {
    for (var i = 0; i < 3; i++) {
      console.log(i); // Output: 0, 1, 2 (during loop)
    }
    console.log(i); // Output: 3 (var is not block-scoped)
  
    for (let j = 0; j < 3; j++) {
      console.log(j); // Output: 0, 1, 2 (during loop)
    }
    // console.log(j); // j is not defined (let is block-scoped)
  }
  
  loopWithVarAndLet();
  