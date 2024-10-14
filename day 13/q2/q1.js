function Vehicle(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Vehicle.prototype.getDetails = function() {
    return `Make: ${this.make}, Model: ${this.model}`;
  };
  
  function ElectricVehicle(make, model, batteryCapacity) {
    Vehicle.call(this, make, model);
    this.batteryCapacity = batteryCapacity;
  }
  
  ElectricVehicle.prototype = Object.create(Vehicle.prototype);
  ElectricVehicle.prototype.constructor = ElectricVehicle;
  
  ElectricVehicle.prototype.getDetails = function() {
    return `${Vehicle.prototype.getDetails.call(this)}, Battery Capacity: ${this.batteryCapacity} kWh`;
  };
  
  ElectricVehicle.compareBattery = function(ev1, ev2) {
    if (ev1.batteryCapacity > ev2.batteryCapacity) {
      return `${ev1.make} ${ev1.model} has a larger battery capacity.`;
    } else if (ev1.batteryCapacity < ev2.batteryCapacity) {
      return `${ev2.make} ${ev2.model} has a larger battery capacity.`;
    } else {
      return `Both vehicles have the same battery capacity.`;
    }
  };
  
  const tesla = new ElectricVehicle("Tesla", "Model S", 100);
  const nissan = new ElectricVehicle("Nissan", "Leaf", 40);
  
  console.log(tesla.getDetails());
  console.log(nissan.getDetails());
  console.log(ElectricVehicle.compareBattery(tesla, nissan));
  