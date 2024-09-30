const Person = {
    name: "Unknown",
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }
    };
    
    
    const Athlete = Object.create(Person);
    Athlete.sport = "Unknown";
    Athlete.playSport = function() {
        console.log(`Playing ${this.sport}`);
    };
    
    
    Athlete.introduce = function() {
        console.log(`Hello, my name is ${this.name} and I play ${this.sport}`);
    };
    
    
    const athleteInstance = Object.create(Athlete);
    athleteInstance.name = "David";
    athleteInstance.sport = "Football";
    
    athleteInstance.introduce();
    athleteInstance.playSport();
    