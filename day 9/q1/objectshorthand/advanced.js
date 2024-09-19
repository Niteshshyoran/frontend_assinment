function updatePerson(oldPerson, newName) {
    return { ...oldPerson, name: newName };
    }
    
    const oldPerson = { name: "John", age: 30 };
    const updatedPerson = updatePerson(oldPerson, "Jack");
    console.log(updatedPerson);
  