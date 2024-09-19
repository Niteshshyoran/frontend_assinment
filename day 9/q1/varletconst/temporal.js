function demonstrateTDZ() {
    console.log(a); // Output: (var is hoisted)
    var a = 10;
  
    // console.log(b); // it is temporal ded zone 
    let b = 20;
  }
  
  demonstrateTDZ();
  