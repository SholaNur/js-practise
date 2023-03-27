// 1. Exercise
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2 Exercise

function checkAge(year) {
  if (year >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not old enough to vote yet");
  }
}
checkAge(25);

// 3. Exercise
function guessNumber(n) {
  let randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
  if (n < randomNum) {
    console.log("Too low, try again.");
  }
  if (n > randomNum) {
    console.log("Too high, try again.");
  }
  if (n === randomNum) {
    console.log("Congratulations, you guessed the number!");
  }
}
guessNumber(46);

// 4. Exercise
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(sum);
