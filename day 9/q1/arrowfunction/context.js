function Person(name) {
    this.name = name;
    this.sayNameArrow = () => {
      console.log(`Arrow: My name is ${this.name}`);
    };
    this.sayNameRegular = function() {
      console.log(`Regular: My name is ${this.name}`);
    };
    }
  
    const person = new Person("John");
    person.sayNameArrow();  
    person.sayNameRegular();
  