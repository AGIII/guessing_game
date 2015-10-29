    var tally = 0;
    var ans1 = document.getElementById('answer1');
    var ans2 = document.getElementById('answer2');
    var ans3 = document.getElementById('answer3');
    var ans4 = document.getElementById('answer4');
    var ans5 = document.getElementById('answer5');
    var ans6 = document.getElementById('answer6');

    alert('Get ready to play a guessing game');

    var name = prompt('What is my middle name?');

  if (name.toLowerCase() === 'francis') {
    tally = tally + 1;
    ans1.innerHTML = 'Correct!' + ' ' + 'You answered ' + name + '.';
    console.log('The user answered correctly with: ' + name);
  } else {
    ans1.innerHTML = 'Incorrect!' + ' ' + 'You answered ' + name + '.';
    console.log('The user answered incorrectly with: ' + name);
  }

    var from = prompt('Where am I from?');

  if (from.toLowerCase() === 'los angeles') {
    tally = tally + 1;
    ans2.innerHTML = 'Correct!' + ' ' + 'You answered ' + from + '.';
    console.log('The user answered correctly with: ' + from);
  } else {
    ans2.innerHTML = 'Incorrect!' + ' ' + 'You answered ' + from + '.';
    console.log('The user answered incorrectly with: ' + from);
  }

  var born = prompt('What year was I born?');

  if (parseInt(born) === 1986) {
    tally = tally + 1;
    ans3.innerHTML = 'Correct!' + ' ' + 'You answered ' + born + '.';
    console.log('The user answered correctly with: ' + born);
  } else {
    ans3.innerHTML = 'Incorrect!' + ' ' + 'You answered ' + born + '.';
    console.log('The user answered incorrectly with: ' + born);
  }

  var temp = prompt('What is the temperature right now in degrees fahrenheit?');

  if (parseInt(temp) === 55) {
    tally = tally + 1;
    ans4.innerHTML = 'Correct! It is ' + temp + ' degrees fahrenheit outside.';
    console.log('The user answered correctly with: ' + temp + ' degrees fahrenheit.');
  } else if (parseInt(temp) > 55.001) {
    ans4.innerHTML = 'Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too high.';
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too high.');
  } else if (parseInt(temp) < 49.999) {
    ans4.innerHTML = 'Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too low.';
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too low.');
  } else {
    ans4.innerHTML = 'Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too low.';
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too low.');
  }

  var win = prompt('Are the Seahawks winning this season?')

  if (win.toLowerCase() === "no") {
    tally = tally + 1;
    ans5.innerHTML = 'You guessed ' + win + '. That is correct.';
    console.log('The user answered correctly with ' + win + '.');
  } else {
    ans5.innerHTML = 'You guessed ' + win + '. That is incorrect.';
    console.log('The user answered incorrectly with ' + win + '.');
  }

  var currentYear = prompt('What is the current year?')

  if (parseInt(currentYear) === 2015) {
    tally = tally + 1;
    ans6.innerHTML = 'You answered ' + currentYear + ". You are correct!";
    console.log('The user answered correctly with ' + currentYear + '.');
  } else {
    ans6.innerHTML = 'You answered ' + currentYear + ". That is incorrect. The current year is 2015.";
    console.log('The user answered incorrectly with ' + currentYear + '.');
  }

  alert('You got ' + tally + ' out of 6 correct!');
