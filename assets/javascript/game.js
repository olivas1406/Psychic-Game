
  // array to hold possible letters to be guessed 
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;                                                           // var holds the number of wins
var losses = 0;                                                         // var holds the number of losses
var gLeft = 9;                                                          // var holds the number of guesses left
var uGuess = [];                                                        // var displays the letters already guessed
var keyPick = "";                                                       // holds the random letter chosen

function postWins() {                                                   // Push the value of the var 'wins' to the HTML
   $(".win").html("Wins: " + wins);
}

function postLoss() {                                                   // Push the value of the var 'losses' to the HTML
  $(".loss").html("Losses: " + losses);
}

function postgLeft() {                                                  // Push the value of the var 'gLeft' to the HTML                                      
  $(".gLeft").html("Guesses Left: " + gLeft);
} 
                                                                     
function postuGuess() {                                                 // Push the value of the var 'uGuess' to the HTML
  $(".uGuess").html("Your Guesses so far: <br><br>" + uGuess);
} 

postWins();                                                             // Initial push of variable values to HTML
postLoss();                                                             // Initial push of variable values to HTML
postgLeft();                                                            // Initial push of variable values to HTML
postuGuess();                                                           // Initial push of variable values to HTML
                 
var currentPick = choices[Math.floor(Math.random() * choices.length)];  // choose a random letter from var choices
                                                                          
document.onkeyup = function(event) {                                    // start listening for events
                                                                         
var keyPick = String.fromCharCode(event.keyCode).toLowerCase();         // store key pressed into var keyPick

var goNoGo = $.inArray(keyPick, choices)                                // Check the value of the keypress against the 'choices' array

var goAgain = $.inArray(keyPick, uGuess)                                // Check the value of the keypress against the 'uGuess' array

  if (goNoGo === -1){                                                   // If the key pressed is not a letter
    alert("Please Choose A Letter");                                    // Alert this
  } else if (goAgain !== -1){                                           // Else If the letter has already been guessed
    alert("You've Already Tried That Letter");                          // Alert this
  } else if (gLeft == 1) {                                              // If Guesses Left = 1, you lose [gLeft is decremented below this line, has to be set to 1 here]
    losses++;                                                           // Increment var losses by 1
    alert("You Lose - The Letter Was: " + currentPick);                 // Alert this
    gLeft = 9;                                                          // Reset Gueses Left to 9
    uGuess = [];                                                        // Reset Letters Guessed blank
    postLoss();                                                         // Display new Losses value
    postgLeft();                                                        // Display new Guesses Left value
    postuGuess();                                                       // Show cleared Guessed Letters
    currentPick = choices[Math.floor(Math.random() * choices.length)];  // Choose a new random letter from the choices array
                                                                  
  } else if (currentPick == keyPick) {                                  // If the keyboard input matches the randomly selected letter, do this
    wins++;                                                             // Increment wins by 1
    alert("You Win! The Letter Was: " + currentPick);                   // Alert this
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












