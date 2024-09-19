function createPerson(name, age) {
    return {
      name,
      age,
      introduce() {
        console.log(`Hi, I'm ${name} and I'm ${age} years old.`);
      }
    };
  }
  
  const person = createPerson("John", 30);
  person.introduce();
  