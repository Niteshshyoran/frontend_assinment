function User(name, role) {
    this.name = name;
    this.role = role;
    }
    
    User.prototype.getRole = function() {
        console.log(`Role: ${this.role}`);
    };
    
    function Admin(name, role) {
        User.call(this, name, role);
    }
    
    Admin.prototype = Object.create(User.prototype);
    Admin.prototype.constructor = Admin;
    
    Admin.prototype.manageUsers = function() {
        console.log("Admin managing users");
    };
    
    const admin = new Admin("Charlie", "Admin");
    
    admin.getRole();
    admin.manageUsers();
    