function displayPerson(person) {
    const { name, age } = person;
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  const person = { name: "John", age: 30 };
  displayPerson(person);
  