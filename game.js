    var tally = 0;
    alert('Get ready to play a guessing game');

    var name = prompt('What is my middle name?');

  if (name.toLowerCase() === 'francis') {
    tally = tally + 1;
    alert('Correct!' + ' ' + 'You answered ' + name + '.');
    console.log('The user answered correctly with: ' + name);
  } else {
    alert('Incorrect!' + ' ' + 'You answered ' + name + '.');
    console.log('The user answered incorrectly with: ' + name);
  }

    var from = prompt('Where am I from?');

  if (from.toLowerCase() === 'los angeles') {
    tally = tally + 1;
    alert('Correct!' + ' ' + 'You answered ' + from + '.');
    console.log('The user answered correctly with: ' + from);
  } else {
    alert('Incorrect!' + ' ' + 'You answered ' + from + '.');
    console.log('The user answered incorrectly with: ' + from);
  }

  var born = prompt('What year was I born?');

  if (parseInt(born) === 1986) {
    tally = tally + 1;
    alert('Correct!' + ' ' + 'You answered ' + born + '.');
    console.log('The user answered correctly with: ' + born);
  } else {
    alert('Incorrect!' + ' ' + 'You answered ' + born + '.');
    console.log('The user answered incorrectly with: ' + born);
  }

  var temp = prompt('What is the temperature right now in degrees fahrenheit?');

  if (parseInt(temp) === 55) {
    tally = tally + 1;
    alert('Correct! It is ' + temp + ' degrees fahrenheit outside.');
    console.log('The user answered correctly with: ' + temp + 'degrees fahrenheit.');
  } else if (parseInt(temp) > 55.001) {
    alert('Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too high.');
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too high.');
  } else if (parseInt(temp) < 49.999) {
    alert('Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too low.');
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too low.');
  }

  var win = prompt('Are the Seahawks winning this season?')

  if (win.toLowerCase() === "no") {
    tally = tally++;
    alert('You guessed ' + win + '. That is correct.')
    console.log('The user answered ' + win + ' which is correct')
  } else {
    alert('You guessed ' + win + '. That is incorrect.')
    console.log('The user answered ' + win + ' which is incorrect')
  }

  alert('You got ' + tally + ' out of 5 correct!');
