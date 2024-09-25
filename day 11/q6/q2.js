function iPhone2(ASIN, color, display, camera, bluetooth) {
   
    return {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        bluetooth: bluetooth,
        dial: function() {
            return "tring.. tring...";
        },
        sendMessage: function() {
            return "Sending message...";
        },
        cameraClick: function() {
            return "Camera clicked";
        },
        connectBluetooth: function() {
            return "Bluetooth connected successfully...";
        }
    };
}

let i2 = iPhone2(1, "B09X67JBQV", 7.8, "IOS", "5.1");

// Properties
console.log(i2.ASIN);         // Output: 1
console.log(i2.color);        // Output: "B09X67JBQV"
console.log(i2.display);      // Output: 7.8
console.log(i2.camera);       // Output: "IOS"
console.log(i2.bluetooth);    // Output: "5.1"

// Methods
console.log(i2.dial());               // Output: "tring.. tring..."
console.log(i2.sendMessage());        // Output: "Sending message..."
console.log(i2.cameraClick());        // Output: "Camera clicked"
console.log(i2.connectBluetooth());   // Output: "Bluetooth connected successfully..."
