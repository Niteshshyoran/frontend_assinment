function testRedeclaration() {
    var x = 10;
    var x = 20; // Allowed (re-declaration with var)
    console.log(x); // Output: 20
  
    let y = 30;
    // let y = 40; // 'y' has already been declared
  
    const z = 50;
    // const z = 60; // 'z' has already been declared
  }
  
  testRedeclaration();
  