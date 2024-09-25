function iPhone3(ASIN, color, display, camera, bluetooth) {
    
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;

  
    this.dial = function() {
        return "tring.. tring...";
    };
    this.sendMessage = function() {
        return "Sending message...";
    };
    this.cameraClick = function() {
        return "Camera clicked";
    };
    this.connectBluetooth = function() {
        return "Bluetooth connected successfully...";
    };
}


let i3 = {};

// Use .call() to assign properties and methods to i3
iPhone3.call(i3, 1, "B09X67JBQV", 7.8, "2.0 MP", "Bluetooth 5.1");

// Properties
console.log(i3.ASIN);         // Output: 1
console.log(i3.color);        // Output: "B09X67JBQV"
console.log(i3.display);      // Output: 7.8
console.log(i3.camera);       // Output: "2.0 MP"
console.log(i3.bluetooth);    // Output: "Bluetooth 5.1"

// Methods
console.log(i3.dial());               // Output: "tring.. tring..."
console.log(i3.sendMessage());        // Output: "Sending message..."
console.log(i3.cameraClick());        // Output: "Camera clicked"
console.log(i3.connectBluetooth());   // Output: "Bluetooth connected successfully..."
