
                                                                          // array to hold possible letters to be guessed 
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;                                                             // var holds the number of wins
var losses = 0;                                                           // var holds the number of losses
var gLeft = 9;                                                            // var holds the number of guesses left
var uGuess = [];                                                          // var displays the letters already guessed
var keyPick = "";                                                         // holds the random letter chosen

function postWins() {                                                     // Push the value of var wins to the HTML
  document.getElementById("win").innerHTML = "Wins: " + wins;
} 

function postLoss() {                                                     // Push the value of var losses to the HTML
  document.getElementById("loss").innerHTML = "Losses: " + losses;
} 

function postgLeft() {                                                    // Push the value of the var gLeft to the HTML
  document.getElementById("gLeft").innerHTML = "Guesses Left: " + gLeft;
} 

function postuGuess() {                                                   // Push the value of the var uGuess to the HTML
  document.getElementById("uGuess").innerHTML = "Your Guesses so far: " + uGuess;
} 

postWins();                                                               // Initial push of variable values to HTML
postLoss();                                                               // Initial push of variable values to HTML
postgLeft();                                                              // Initial push of variable values to HTML
postuGuess();                                                             // Initial push of variable values to HTML

var currentPick = choices[Math.floor(Math.random() * choices.length)];    // choose a random letter from var choices

document.onkeyup = function(event) {                                      // start listening for events
	
	var keyPick = String.fromCharCode(event.keyCode).toLowerCase();         // store key pressed into var keyPick

    if (gLeft == 1) {                                                     // If Guesses Left = 1, you lose [gLeft is decremented below this line, has to be set to 1 here]
      losses++;                                                           // Increment var losses by 1
      gLeft = 9;                                                          // Reset Gueses Left to 9
      uGuess = [];                                                        // Reset Letters Guessed blank
      postLoss();                                                         // Display new Losses value
      postgLeft();                                                        // Display new Guesses Left value
      postuGuess();                                                       // Show cleared Guessed Letters
      currentPick = choices[Math.floor(Math.random() * choices.length)];  // Choose a new random letter from the choices array

    } else if (currentPick == keyPick) {                                  // If the keyboard input matches the randomly selected letter, do this
      wins++;                                                             // Increment wins by 1
      gLeft = 9;                                                          // Reset Gueses Left to 9
      uGuess = [];                                                        // Reset Letters Guessed blank
      currentPick = choices[Math.floor(Math.random() * choices.length)];  // Choose a new random letter from the choices array
      postgLeft();                                                        // Display new Guesses Left value
      postuGuess();                                                       // Show cleared Guessed Letters
      postWins();                                                         // Display new Wins value

    } else if (keyPick !== currentPick) {                                 // If the keyboard input does not match the selected letter, do this
      uGuess.push(keyPick)                                                // Add the key pressed to Guessed Letters
      gLeft--;                                                            // Decrement Guesses Left
      postgLeft();                                                        // Display new Guesses Left value
      postuGuess();                                                       // Display Guessed Letters
  }
}
  



