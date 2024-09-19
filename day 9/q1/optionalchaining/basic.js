function getUserCity(user) {
    return user?.address?.city;
  }
  
  const user1 = { name: "John", address: { city: "New York" } };
  const user2 = { name: "Jane" };
  
  console.log(getUserCity(user1)); 
  console.log(getUserCity(user2)); // Output: undefined
  