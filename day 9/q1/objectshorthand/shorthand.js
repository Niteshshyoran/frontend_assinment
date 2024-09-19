function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
    }
  
    const obj1 = { name: "john", age: 25 };
    const obj2 = { profession: "Engineer", city: "USAa" };
    console.log(mergeObjects(obj1, obj2));
 
  