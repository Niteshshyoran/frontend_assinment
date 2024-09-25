class Iphone4{
    constructor(ASIN, color, display, camera, bluetooth) {
    
        this.ASIN = ASIN;
        this.color = color;
        this.display = display;
        this.camera = camera;
        this.bluetooth = bluetooth;
    }
      

        dial () {
            return "tring.. tring...";
        }
        sendMessage () {
            return "Sending message...";
        }
        cameraClick  () {
            return "Camera clicked";
        }
        connectBluetooth () {
            return "Bluetooth connected successfully...";
        }

    }

let i4 = new Iphone4(1, "B09X67JBQV", 7.8, "2.0 MP", "Bluetooth 5.1");




console.log(i4.ASIN);         // Output: 1
console.log(i4.color);        // Output: "B09X67JBQV"
console.log(i4.display);      // Output: 7.8
console.log(i4.camera);       // Output: "2.0 MP"
console.log(i4.bluetooth);    // Output: "Bluetooth 5.1"

// Methods
console.log(i4.dial());               // Output: "tring.. tring..."
console.log(i4.sendMessage());        // Output: "Sending message..."
console.log(i4.cameraClick());        // Output: "Camera clicked"
console.log(i4.connectBluetooth());   // Output: "Bluetooth connected successfully..."
