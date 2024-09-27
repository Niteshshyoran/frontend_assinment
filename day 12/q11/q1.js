function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

Product.prototype.getDetails = function() {
    return `Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`;
};

Product.prototype.updateQuantity = function(amount) {
    this.quantity += amount; 
    console.log(`Updated quantity of ${this.name}: ${this.quantity}`);
};

function Electronics(name, price, quantity, brand, model) {
    Product.call(this, name, price, quantity); 
    this.brand = brand;
    this.model = model;
}

Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function() {
    console.log(`The ${this.brand} ${this.model} is now powered on.`);
};

Electronics.prototype.powerOff = function() {
    console.log(`The ${this.brand} ${this.model} is now powered off.`);
};

function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity); 
    this.size = size;
    this.material = material;
}

Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;


Clothing.prototype.getSize = function() {
    return `Size: ${this.size}`;
};

Clothing.prototype.getMaterial = function() {
    return `Material: ${this.material}`;
};

function Books(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
}

Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

Books.prototype.getAuthor = function() {
    return `Author: ${this.author}`;
};

Books.prototype.getGenre = function() {
    return `Genre: ${this.genre}`;
};

function runECommerceSimulation() {
    const phone = new Electronics('Smartphone', 699, 50, 'Apple', 'iPhone 13');
    const shirt = new Clothing('T-Shirt', 29.99, 100, 'L', 'Cotton');
    const book = new Books('JavaScript: The Good Parts', 25.99, 10, 'Douglas Crockford', 'Programming');

    console.log(phone.getDetails());
    console.log(shirt.getDetails());
    console.log(book.getDetails());

    phone.powerOn();
    phone.powerOff();

    console.log(shirt.getSize());
    console.log(shirt.getMaterial());

    console.log(book.getAuthor());
    console.log(book.getGenre());

    phone.updateQuantity(-5);
    shirt.updateQuantity(20);
    book.updateQuantity(-2); 
}
runECommerceSimulation();
