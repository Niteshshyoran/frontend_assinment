function Appliance(name) {
    this.name = name;
  }
  
  Appliance.prototype.turnOn = function() {
    console.log("The appliance is now on");
  };
  
  function WashingMachine(name) {
    Appliance.call(this, name);
  }
  
  WashingMachine.prototype = Object.create(Appliance.prototype);
  WashingMachine.prototype.constructor = WashingMachine;
  
  WashingMachine.prototype.startWashing = function() {
    console.log("The washing machine is now washing clothes");
  };
  
  const washingMachine = new WashingMachine("LG Washing Machine");
  
  washingMachine.turnOn();
  washingMachine.startWashing();
  