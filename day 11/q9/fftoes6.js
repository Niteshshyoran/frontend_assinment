class Animales6{
    constructor(noOfLegs, vegetarian){
        this.noOfLegs=noOfLegs;
        this.vegetarian=vegetarian;
    }
    
        eat(){
            return  "eating...";
        }
        greet(){
            return `Hi, I have ${this.noOfLegs} legs.`;
        }
    
}
let aF = new Animales6(4,true)

console.log(aF.eat())
console.log(aF.greet())