function findFirstEven(numbers) {
    let i = 0;
  
    while (i < numbers.length) {
      if (numbers[i] % 2 === 0) {
        return numbers[i];
      }
      else{
        i++;
      }
    }
    return null;
  }    
    const numbers = [1, 3, 7, 15, 21];
    console.log(findFirstEven(numbers));
 