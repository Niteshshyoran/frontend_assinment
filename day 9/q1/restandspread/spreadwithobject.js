function updatePerson(person, updates) {
    return { ...person, ...updates };
    }
    
    const person = { name: "John", age: 30 };
    const updates = { age: 31, city: "New York" };
    
    console.log(updatePerson(person, updates)); 