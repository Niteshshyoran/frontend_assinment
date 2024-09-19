function testVar() {
    if (true) {
      var x = 10;
    }
    console.log(x); // output is 10
  }
  
  function testLet() {
    if (true) {
      let y = 20;
    }
    console.log(y); //no output
  }
  
  testVar();
  testLet();
  