function createUser(username, role = "user") {
    return { username, role };
  }
  
  console.log(createUser("john_doe"));