function classifyAnimal(animal) {
    let classification;
  
    switch (animal.toLowerCase()) {
        case "dog":
        case "cat":
        case "cow":
        case "elephant":
            classification = "Mammal";
            break;
        case "eagle":
        case "sparrow":
        case "penguin":
            classification = "Bird";
            break;
        case "snake":
        case "lizard":
        case "crocodile":
            classification = "Reptile";
            break;
        case "shark":
        case "salmon":
        case "trout":
            classification = "Fish";
            break;
        default:
            classification = "Unknown animal classification";
        }
  
    return classification;
  }
  
    console.log(classifyAnimal("dog"));
  