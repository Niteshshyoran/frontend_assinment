class Car {
    constructor(name, accelerationPower, brakingPower, maxFuelCapacity) {
      this.name = name;
      this.accelerationPower = accelerationPower; 
      this.brakingPower = brakingPower; 
      this.speed = 0;
      this.fuel = maxFuelCapacity; 
      this.maxFuelCapacity = maxFuelCapacity; 
    }
  
    
    accelerate() {
      if (this.fuel > 0) {
        this.speed += this.accelerationPower;
        this.fuel -= 1;
        console.log(`Accelerating... Current speed: ${this.speed} m/s`);
      } else {
        console.log("Out of fuel, please refuel!");
      }
    }
  
    
    brake() {
      this.speed = Math.max(0, this.speed - this.brakingPower);
      console.log(`Brakes applied. Current speed: ${this.speed} m/s`);
    }
  
    checkSpeed() {
      return this.speed;
    }
  
    refuel() {
      this.fuel = this.maxFuelCapacity;
      console.log("Refueled to maximum capacity.");
    }

    drive(duration) {
      for (let i = 0; i < duration; i++) {
        if (this.fuel <= 0) {
          console.log("Out of fuel, please refuel!");
          break;
        }
  
        if (i < duration / 2) {
          this.accelerate();
        } 

        else {
          this.brake();
        }

        console.log(`Time: ${i + 1}s, Speed: ${this.speed} m/s, Fuel: ${this.fuel}`);
      }
    }
    }
  
    const myCar = new Car("Speedster", 5, 3, 10);
    
    
    myCar.accelerate(); 
    myCar.brake(); 
    console.log("Current Speed:", myCar.checkSpeed()); 
    myCar.refuel(); 
    
    myCar.drive(8);
    