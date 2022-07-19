"use strict";

function enterUserName() {
  let userName = prompt("Please Enter Your Name!");

  console.log(userName);
  if (userName.toLowerCase() === "Adam") {
    document.write("Welcome Instructor " + userName);
  } else {
    document.write("Welcome " + userName);
  }
}

enterUserName();

let answer1 = prompt("Do I like Marvel Cinematic Universe Movies?");
console.log(answer1);

answer1 = answer1.toLowerCase();
if (answer1 === "yes" || answer1 === "y") {
  alert("Correct it is my favorite ganre of movies to watch at the cinema");
} else if (answer1 === "no" || answer1 === "n") {
  alert("Sorry that is Incorrect. I love Marvel Cinematic Universe movies");
} else {
  alert("Come on all you had to do was say yes or noo");
}

let answer2 = prompt("Do you think baseball is my favorite sport?");
console.log(answer2);

answer2 = answer2.toLowerCase();
if (answer2 === "no" || answer2 === "n") {
  alert("Correct! I like baseball, but soccer is my favorite sport");
} else if (answer2 === "yes" || answer2 === "y") {
  alert("No way, sorry. My favorite sport is soccer");
} else {
  alert("Come on, all you had to do was say yes or no");
}

let answer3 = prompt("Do you think that I've traveled to Italy?");
console.log(answer3);

answer3 = answer3.toLowerCase();
if (answer3 === "no" || answer3 === "n") {
  alert("Correct! I hope to travel to Italy someday");
} else if (answer3 === "yes" || answer3 === "y") {
  alert("Sorry, I wish I did");
} else {
  alert("Come on, for the next question just say yes or no");
}

let answer4 = prompt("Do you think that I am a Latino?");
console.log(answer4);

answer4 = answer4.toLowerCase();
if (answer4 === "yes" || answer4 === "y") {
  alert("Correct! I was born in Colombia and moved to the Cayman Islands at the age of eleven");
} else if (answer4 === "no" || answer4 === "n") {
  alert("Incorrect, I am a proud Latino");
} else {
  alert("No more non-sense, just say yes or no");
}

let answer5 = prompt("I skydived Mount Everest back in 2020. Do you think this is true?");
console.log(answer5);

answer5 = answer5.toLowerCase();
if (answer5 === "no" || answer5 === "n") {
  alert("Correct! Is it even possible to do that?!");
} else if (answer5 === "yes" || answer5 === "y") {
  alert("Incorrect, I was too busy quarantining");
} else {
  alert("Its all over now");
}

let attemptsRemain = 5;
let correctAnswer = "13";
let answeredCorrectly = false;

while(attemptsRemain && !answeredCorrectly){
  let response = prompt(`You get  ${attemptsRemain} attempts. Between 1 to 20 what is my favorite number?!`).toLowerCase();
  if (response === correctAnswer){
    alert("That's Correct!");
    answeredCorrectly = true;
    if (response > correctAnswer){
      response = prompt("Sorry, too high! Please try again!");
  } else if (response < correctAnswer){
      response = prompt("Sorry, too low! Please try again!");
  }
  }
  attemptsRemain--;
}

let myFavoriteColors = 6;
let correctColors = "Red, Black, White";
let answeredColors = false;

while(myFavoriteColors && !answeredColors){
  let response = prompt(`You get  ${attemptsRemain} attempts. What is my favorite color?!`).toLowerCase();
  if (response === correctColors){
    alert("That's Correct!");
    answeredColors = true;
  }
  myFavoriteColors--;
}

