function validatePassword() {
    let password;
    
    do {
      password = prompt("Enter your password (must be longer than 6 characters):");
    } while (password.length <= 6);
    
    console.log("Password accepted!");
  }
  