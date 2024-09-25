function Animal(noOfLegs, vegetarian){
    this.noOfLegs=noOfLegs
    this.vegetarian=vegetarian


    this.eat=function(){
        return  "eating..."
    }
    this.greet= function(){
        return `Hi, I have ${this.noOfLegs} legs.`;
    }
}

let aF = new Animal(4,true)

console.log(aF.eat())
console.log(aF.greet())