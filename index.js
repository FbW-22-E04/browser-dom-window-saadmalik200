const randomNum = String(Math.floor(Math.random() * 10 + 1));

let counter = 0;

const input = prompt("Guess a number between 1-10:");
// console.log(input);

for (let i = 0; i < 2; i++) {
  if (input === randomNum) {
    counter++;
    alert(`Success, the number was ${randomNum}! Attempts: ${counter} `);
    break;
  } else {
    counter++;
    // console.log("Counter is:", counter);
    const input2 = prompt("Wrong!!! Try Again!");
    // console.log("input2 is: ", input2);
    if (input2 === randomNum && counter !== 3) {
      counter++;
      alert(`Success, the number was ${randomNum}! Attempts: ${counter} `);
      break;
    } else if (input2 !== randomNum && counter === 2) {
      alert(
        `Sorry, you failed to guess the number in three attempts. The number was ${randomNum} !`
      );
    }
  }
}
