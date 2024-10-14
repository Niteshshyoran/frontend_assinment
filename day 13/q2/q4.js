function Shape(name) {
    this.name = name;
  }
  
  Shape.prototype.calculateArea = function() {
    return `Area of ${this.name}: 0`;
  };
  
  Shape.prototype.compareArea = function(shape) {
    const area1 = this.calculateArea();
    const area2 = shape.calculateArea();
    if (area1 > area2) {
      return `${this.name} has a larger area.`;
    } else if (area1 < area2) {
      return `${shape.name} has a larger area.`;
    } else {
      return `Both shapes have the same area.`;
    }
  };
  
  function Rectangle(name, width, height) {
    Shape.call(this, name);
    this.width = width;
    this.height = height;
  }
  
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  Rectangle.prototype.calculateArea = function() {
    return this.width * this.height;
  };
  
  function Triangle(name, base, height) {
    Shape.call(this, name);
    this.base = base;
    this.height = height;
  }
  
  Triangle.prototype = Object.create(Shape.prototype);
  Triangle.prototype.constructor = Triangle;
  
  Triangle.prototype.calculateArea = function() {
    return 0.5 * this.base * this.height;
  };
  
  function Parallelogram(name, base, height) {
    Rectangle.call(this, name, base, height);
  }
  
  Parallelogram.prototype = Object.create(Rectangle.prototype);
  Parallelogram.prototype.constructor = Parallelogram;
  
  Parallelogram.prototype.calculateArea = function() {
    return this.width * this.height;  
  };
  
  const rectangle = new Rectangle("Rectangle", 10, 5);
  const triangle = new Triangle("Triangle", 10, 5);
  const parallelogram = new Parallelogram("Parallelogram", 10, 5);
  
  console.log(rectangle.calculateArea());          
  console.log(triangle.calculateArea());           
  console.log(parallelogram.calculateArea());      
  console.log(rectangle.compareArea(triangle));   