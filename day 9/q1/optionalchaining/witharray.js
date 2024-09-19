function getFirstFriend(user) {
    return user?.friends?.[0];
  }
  
  const user1 = { name: "Alice", friends: ["Bob", "Charlie"] };
  const user2 = { name: "Tom" };
  
  console.log(getFirstFriend(user1)); 
  console.log(getFirstFriend(user2)); // Output: undefined
  