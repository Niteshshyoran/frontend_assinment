function Employee(name, baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }
  
  Employee.prototype.calculateSalary = function() {
    return `Base Salary: $${this.baseSalary}`;
  };
  
  function FullTimeEmployee(name, baseSalary, bonus) {
    Employee.call(this, name, baseSalary);
    this.bonus = bonus;
  }
  
  FullTimeEmployee.prototype = Object.create(Employee.prototype);
  FullTimeEmployee.prototype.constructor = FullTimeEmployee;
  
  FullTimeEmployee.prototype.calculateSalary = function() {
    return `Total Salary: $${this.baseSalary + this.bonus}`;
  };
  
  function PartTimeEmployee(name, baseSalary, hourlyRate, hoursWorked) {
    Employee.call(this, name, baseSalary);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }
  
  PartTimeEmployee.prototype = Object.create(Employee.prototype);
  PartTimeEmployee.prototype.constructor = PartTimeEmployee;
  
  PartTimeEmployee.prototype.calculateSalary = function() {
    return `Total Salary: $${this.hourlyRate * this.hoursWorked}`;
  };
  
  const fullTime = new FullTimeEmployee("Alice", 5000, 1000);
  const partTime = new PartTimeEmployee("Bob", 0, 20, 80);
  
  console.log(fullTime.calculateSalary());  
  console.log(partTime.calculateSalary()); 
  