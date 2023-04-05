let GUESS_NUMBER = Number(prompt("Guess a number between 1 and 100"))
let RANDOM_NUMBER = Math.floor(Math.random() * 100) + 1;
let GUESS_COUNT = 0

while(RANDOM_NUMBER != GUESS_NUMBER) {
    if(GUESS_NUMBER === RANDOM_NUMBER) {
        alert("You guessed the number!", RANDOM_NUMBER)
        console.log(GUESS_COUNT)
    } else if(GUESS_NUMBER > RANDOM_NUMBER) {
        GUESS_NUMBER = Number(prompt("Too high! Guess again!"))
        GUESS_COUNT++
    } else if(GUESS_NUMBER < RANDOM_NUMBER) {
        GUESS_NUMBER = Number(prompt("Too low! Guess again!"))
        GUESS_COUNT++
    }
}
alert(`You guessed the correct number of ${GUESS_NUMBER} in ${GUESS_COUNT} turns.`)
console.log(`You guessed the correct number of ${GUESS_NUMBER} in ${GUESS_COUNT} turns.`)