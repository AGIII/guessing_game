// Basic flow control
// IF / ELSE IF / ELSE
// WHILE
// DO WHILE

if (condition) {
  // Do some code
} else if (condition2) {
  // Do some other code
} else if (condition3) {
  // Do some code
} else {
  // Do some other code
}


var user = parseInt(prompt('Whats my number?'));

while (user !== 4) {
  alert('Thats not my number, guess again');
  user = prompt('What is your guess?');
}

