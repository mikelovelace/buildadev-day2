let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;
let guessNumber = 0;
let playAgain = true;

while (playAgain) {
  let guessNumber = Number(prompt("Guess a number between 1 and 100"));

  if (guessNumber === randomNumber) {
    alert(
      `You guessed the correct number of ${guessNumber} in ${guessCount} turns.`
    );
    playAgain = confirm("Do you want to play again?");

    if (playAgain) {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      guessCount = 0;
      guessNumber = 0;
    }
  } else if (guessNumber > randomNumber) {
    guessNumber = alert("Too high! Guess again!");
    guessCount++;
  } else {
    guessNumber = alert("Too low! Guess again!");
    guessCount++;
  }
}
