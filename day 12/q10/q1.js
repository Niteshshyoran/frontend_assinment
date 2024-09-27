function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
  }
  
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false; 
      this.rentedCars.push(car); 
      console.log(`${this.name} rented a ${car.make} ${car.model}.`);
    } else {
      console.log(`The ${car.make} ${car.model} is already rented.`);
    }
  };
  
  function PremiumCustomer(name, rentedCars = [], discountRate = 0.1) {
    Customer.call(this, name, rentedCars);
    this.discountRate = discountRate;
  }
  
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  function calculateRentalPrice(car, days, customer) {
    const basePricePerDay = 50; 
    let carTypeRate = basePricePerDay; 
  
    if (car instanceof SUV) {
      carTypeRate = basePricePerDay * 1.2;
    } else if (car instanceof Sedan) {
      carTypeRate = basePricePerDay; 
    }
  
    let totalCost = carTypeRate * days;
  
    if (customer instanceof PremiumCustomer) {
      totalCost -= totalCost * customer.discountRate;
    }
  
    return totalCost;
  }
  
  
  Customer.prototype.returnCar = function(car) {
    return new Promise((resolve) => {
      setTimeout(() => {
        car.isAvailable = true;
        this.rentedCars = this.rentedCars.filter((rentedCar) => rentedCar !== car);
        console.log(`${this.name} returned a ${car.make} ${car.model}.`);
        resolve();
      }, 2000);
    });
  };
  
  function Maintenance(car, delay) {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`The ${car.make} ${car.model} has been serviced and is now available.`);
    }, delay);
  }
  
  function SUV(make, model, year) {
    Car.call(this, make, model, year);
  }
  SUV.prototype = Object.create(Car.prototype);
  SUV.prototype.constructor = SUV;
  
  function Sedan(make, model, year) {
    Car.call(this, make, model, year);
  }
  Sedan.prototype = Object.create(Car.prototype);
  Sedan.prototype.constructor = Sedan;
  
  async function runSimulation() {
    // Create several car objects of different types
    const car1 = new SUV('Toyota', 'RAV4', 2020);
    const car2 = new Sedan('Honda', 'Civic', 2019);
    const car3 = new Car('Ford', 'Focus', 2021);
  
    // Create regular and premium customers
    const customer1 = new Customer('Alice');
    const premiumCustomer = new PremiumCustomer('Bob', [], 0.15); // 15% discount
  
    // Show renting cars
    customer1.rentCar(car1);
    premiumCustomer.rentCar(car2);
  
    // Calculate rental prices
    const price1 = calculateRentalPrice(car1, 3, customer1);
    const price2 = calculateRentalPrice(car2, 2, premiumCustomer);
    console.log(`Rental price for ${customer1.name}: $${price1}`);
    console.log(`Rental price for ${premiumCustomer.name}: $${price2}`);
  
    // Show returning cars
    await customer1.returnCar(car1);
    await premiumCustomer.returnCar(car2);
  
    // Show maintenance handling
    Maintenance(car3, 3000); 
  }
  
  runSimulation();
  