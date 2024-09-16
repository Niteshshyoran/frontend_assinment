function guessNumber() {
    const targetNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    let attempts = 0;
  
    do {
      guess = parseInt(prompt("Guess a number between 1 and 10:"), 10);
      attempts++;
    } while (guess !== targetNumber);
    
    console.log(`Congratulations! You guessed the number ${targetNumber} correctly in ${attempts} attempts.`);
   }
