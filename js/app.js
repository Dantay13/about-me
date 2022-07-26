"use strict";

let userName = prompt("What is your name?");
console.log(userName);
if (userName === "Adam") {
  document.write("Welcome Instructor " + userName);
} else {
  document.write("Welcome " + userName);
}

function questionAboutMe(message, answer1, answer2) {
  let answer = prompt(message).toLowerCase();
  if (answer === answer1 || answer === answer2) {
    alert("You got that right");
    return;
  }
  alert("Sorry that\'s incorrect.")
}
questionAboutMe("Do I like Marvel Cinematic Universe Movies?", "y", "yes");
questionAboutMe("Do you think baseball is my favorite sport?", "n", "no");
questionAboutMe("Do you think that I've traveled to Italy?", "n", "no");
questionAboutMe("Do you think that I am a Latino?", "y", "yes");
questionAboutMe("I skydived Mount Everest back in 2020. Do you think this is true?", "n", "no");

function myFavoriteNumber(){
  let correctAnswer = "13";
  for (let i=0; i< 4 ;i++){
    let response = prompt("Between 1-20 what is my favorite number?");
    if (response === correctAnswer){
      alert("That is correct");
      break;
    }else if (i >= 3){
      alert("Sorry better luck next time");
      break;
    }else if (response < correctAnswer){
      alert("That number is too low");
    } else if (response > correctAnswer){
      alert("Tha number is too high");
    }
  }
}
myFavoriteNumber();

function myFavoriteColors() {
  const correctColors = ["red", "black", "white"];
  for (let i = 6; i > 0; i--) {
    let response = prompt("You get " + i + "attempts. What is my favorite color?").toLowerCase();
    if (response === correctColors[0] || response === correctColors[1] || response === correctColors[2]) {
      alert("That's correct!");
      break;
    }
    alert("That's incorrect!");
  }
}
myFavoriteColors();

