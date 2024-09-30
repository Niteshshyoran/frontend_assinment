function Employee(name, position) {
    this.name = name;
    this.position = position;
    }
    
    Employee.prototype.getDetails = function() {
        return `Name: ${this.name}, Position: ${this.position}`;
    };

    function Manager(name, position, teamSize) {
        Employee.call(this, name, position);
        this.teamSize = teamSize;
    }
    
    Manager.prototype = Object.create(Employee.prototype);
    Manager.prototype.constructor = Manager;
    
    Manager.prototype.getDetails = function() {
        return `${Employee.prototype.getDetails.call(this)}, Team Size: ${this.teamSize}`;
    };
    
   
    function Developer(name, position, programmingLanguage) {
        Employee.call(this, name, position);
        this.programmingLanguage = programmingLanguage;
    }
    
    Developer.prototype = Object.create(Employee.prototype);
    Developer.prototype.constructor = Developer;
    
    Developer.prototype.getDetails = function() {
        return `${Employee.prototype.getDetails.call(this)}, Programming Language: ${this.programmingLanguage}`;
    };
    
    const manager = new Manager("Alice", "Manager", 10);
    const developer = new Developer("Bob", "Developer", "JavaScript");
    
    console.log(manager.getDetails());
    console.log(developer.getDetails());
    