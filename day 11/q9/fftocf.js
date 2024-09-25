function AnimalCF(noOfLegs, vegetarian) {
    
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  

    this.eat = function () {
      return "eating...";
    };

    this.greet = function () {
      return `Hi, I have ${this.noOfLegs} legs.`;
    };
    }
  
    
    let animalCF = new AnimalCF(4, true);
    

    console.log(animalCF.eat());    
    console.log(animalCF.greet());  
    