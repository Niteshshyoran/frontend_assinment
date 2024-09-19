function getUserInfo(user) {
    const { name, ...rest } = user;
    console.log(`Name: ${name}`);
    console.log(`Other info:`, rest);
    }
    
    const user = { name: "Alice", age: 25, city: "New York", profession: "Engineer" };
    getUserInfo(user);
    