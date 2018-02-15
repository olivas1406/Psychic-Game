
// array to hold possible letters to be guessed 
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var wins = 0;     // var holds the number of wins
var losses = 0;   // var holds the number of losses
var gLeft = 12;   // var holds the number of guesses left
var uGuess = [];  // var displays the letters already guessed
var keyPick = ""; // holds the random letter chosen

function postWins() {   // Push the value of var wins to the HTML
  document.getElementById("win").innerHTML = "Wins: " + wins;
} 

function postLoss() {   // Push the value of var losses to the HTML
  document.getElementById("loss").innerHTML = "Losses: " + losses;
} 

function postgLeft() {  // Push the value of the var gLeft to the HTML
  document.getElementById("gLeft").innerHTML = "Guesses Left: " + gLeft;
} 

function postuGuess() { // Push the value of the var uGuess to the HTML
  document.getElementById("uGuess").innerHTML = "Your Guesses so far: " + uGuess;
} 

// Initial push of variable values to HTML
postWins(); 
postLoss();
postgLeft();
postuGuess();


// choose a random letter from var choices
var currentPick = choices[Math.floor(Math.random() * choices.length)];

// start listening for events
document.onkeyup = function(event) {

	// store key pressed into var keyPick
	var keyPick = String.fromCharCode(event.keyCode).toLowerCase();

    if (gLeft == 1) {
      losses++;
      gLeft = 12;
      uGuess = [];
      postLoss();     // Display new Losses value
      postgLeft();    // Display new Guesses Left value
      postuGuess();   // Show cleared Guessed Letters
      currentPick = choices[Math.floor(Math.random() * choices.length)];

    } else if (currentPick == keyPick) {
      wins++;
      gLeft = 12;
      uGuess = [];
      currentPick = choices[Math.floor(Math.random() * choices.length)];
      postgLeft();    // Display new Guesses Left value
      postuGuess();   // Show cleared Guessed Letters
      postWins();     // Display new Wins value

    } else if (keyPick !== currentPick) {
      uGuess.push(keyPick)
      gLeft--;        // Decrement Guesses Left
      postgLeft();    // Display new Guesses Left value
      postuGuess();   // Display Guessed Letters
  }
}
  



