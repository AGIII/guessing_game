    var car = document.getElementById('car');
    var pic1 = document.getElementById('pic1');
    var pic2 = document.getElementById('pic2');
    var pic3 = document.getElementById('pic3');
    var pic4 = document.getElementById('pic4');
    var pic5 = document.getElementById('pic5');
    var pic6 = document.getElementById('pic6');
    var tally = 0;
    var ans1 = document.getElementById('answer1');
    var ans2 = document.getElementById('answer2');
    var ans3 = document.getElementById('answer3');
    var ans4 = document.getElementById('answer4');
    var ans5 = document.getElementById('answer5');
    var ans6 = document.getElementById('answer6');
    car.innerHTML = '<img src="Ferrari.jpg" alt="really nice car" height="200">';

  function alertTimeOut() {
    alert('Get ready to play a guessing game');
    };
    setTimeout(alertTimeOut, 100);

  function q1(){
  var name = prompt('What is my middle name?');
  if (name.toLowerCase() === 'francis') {
    tally = tally + 1;
    ans1.innerHTML = 'Correct!' + ' ' + 'You answered ' + name + '.';
    console.log('The user answered correctly with: ' + name);
    pic1.innerHTML = '<img src="francis.jpg" alt="Pope Francis" height="200">';
    ans1.className = "correct";
  } else {
    ans1.innerHTML = 'Incorrect!' + ' ' + 'You answered ' + name + '.';
    console.log('The user answered incorrectly with: ' + name);
    ans1.className = "incorrect";
    }
  }
  setTimeout(q1, 120);


  function q2(){
  var from = prompt('Where am I from?');
  if (from.toLowerCase() === 'los angeles') {
    tally = tally + 1;
    ans2.innerHTML = 'Correct!' + ' ' + 'You answered ' + from + '.';
    console.log('The user answered correctly with: ' + from);
    pic2.innerHTML = '<img src="la.jpg" alt="Los Angeles" height="200">';
    ans2.className = "correct";
  } else {
    ans2.innerHTML = 'Incorrect!' + ' ' + 'You answered ' + from + '.';
    console.log('The user answered incorrectly with: ' + from);
    ans2.className = "incorrect";
  }
}
setTimeout(q2, 140);


function q3(){
  var born = prompt('What year was I born?');
  if (parseInt(born) === 1986) {
    tally = tally + 1;
    ans3.innerHTML = 'Correct!' + ' ' + 'You answered ' + born + '.';
    console.log('The user answered correctly with: ' + born);
    pic3.innerHTML = '<img src="eighties.jpg" alt="1986" height="200">';
    ans3.className = "correct";
  } else {
    ans3.innerHTML = 'Incorrect!' + ' ' + 'You answered ' + born + '.';
    console.log('The user answered incorrectly with: ' + born);
    ans3.className = "incorrect";
  }
}
setTimeout(q3, 160);


function q4(){
  var temp = prompt('What is the temperature right now in degrees fahrenheit?');
  if (parseInt(temp) === 55) {
    tally = tally + 1;
    ans4.innerHTML = 'Correct! It is ' + temp + ' degrees fahrenheit outside.';
    console.log('The user answered correctly with: ' + temp + ' degrees fahrenheit.');
    pic4.innerHTML = '<img src="temp.png" alt="temperature" height="200">';
    ans4.className = "correct";
  } else if (parseInt(temp) > 55.001) {
    ans4.innerHTML = 'Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too high.';
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too high.');
    ans4.className = "incorrect";
  } else if (parseInt(temp) < 49.999) {
    ans4.innerHTML = 'Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too low.';
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too low.');
    ans4.className = "incorrect";
  } else {
    ans4.innerHTML = 'Incorrect! You answered ' + temp + ' degrees fahrenheit, which is too low.';
    console.log('The user answered ' + temp + ' degrees fahrenheit, which is too low.');
    ans4.className = "incorrect";
  }
}
setTimeout(q4, 180);


function q5(){
  var win = prompt('Are the Seahawks winning this season?')
  if (win.toLowerCase() === "no") {
    tally = tally + 1;
    ans5.innerHTML = 'You guessed ' + win + '. That is correct.';
    console.log('The user answered correctly with ' + win + '.');
    pic5.innerHTML = '<img src="seahawks.png" alt="Seahawks Logo" height="200">';
    ans5.className = "correct";
  } else {
    ans5.innerHTML = 'You guessed ' + win + '. That is incorrect.';
    console.log('The user answered incorrectly with ' + win + '.');
    ans5.className = "incorrect";
  }
}
setTimeout(q5, 200);


function q6(){
  var currentYear = prompt('What is the current year?')
  if (parseInt(currentYear) === 2015) {
    tally = tally + 1;
    ans6.innerHTML = 'You answered ' + currentYear + ". You are correct!";
    console.log('The user answered correctly with ' + currentYear + '.');
    pic6.innerHTML = '<img src="2015.jpg" alt="Current Year" height="200">';
    ans6.className = "correct";
  } else {
    ans6.innerHTML = 'You answered ' + currentYear + ". That is incorrect. The current year is 2015.";
    console.log('The user answered incorrectly with ' + currentYear + '.');
    ans6.className = "incorrect";
  }
}
setTimeout(q6, 220);

function endGame(){
  alert('You got ' + tally + ' out of 6 correct!');
}
setTimeout(endGame, 300);
