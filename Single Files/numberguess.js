num = 50
var guess = Number(prompt('Guess a number'))

if (guess === num) {
    console.log('your guess is correct: ' + guess)
} else if (guess < num) {
    console.log('your guess was too low')
} else {
    console.log('your guess was too high')
}