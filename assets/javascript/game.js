// available letters
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;           // win tracker
var losses = 0;         // loss tracker
var gLeft = 12;         // number of guesses left
var uGuess = [""];      // letters already guessed
var keyPick = "";       // keyboard letter pressed
var currentPick = "";   // letter picked from var choices

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

// uGuess and keyPick are not being stored
// uGuess and keyPick are not being stored
// uGuess and keyPick are not being stored
// uGuess and keyPick are not being stored
// uGuess and keyPick are not being stored
// uGuess and keyPick are not being stored
// uGuess and keyPick are not being stored


// create variable to hold a random letter from the choices array
var currentPick = choices[Math.floor(Math.random() * choices.length)];

// detect keyboard input
//document.onkeypress = function(event) {
// store the key pressed in var keyPick
//  var keyPick = String.fromCharCode(event.keyCode);
//var keyPick = string.fromCharCode(event.keyCode).toLowerCase();
//  keyPick = event.key;
// NONE OF THIS SHIT WORKS ^


document.onkeypress = function(event) {
    var keyPick = event.key;

    if (uGuess.indexOf(keyPick) < 0 && choices.indexOf(keyPick) >= 0) {
        uGuess[uGuess.length]=keyPick;
        gLeft--;        // Decrement Guesses by 1
        postgLeft();    // Display new Guesses Left value
    
    } else if (currentPick === keyPick) {
        wins++;         // Increment wins by 1
        gLeft = 12;     // Reset Guesses Left to 12
        uGuess = [];    // Reset the Letters Guessed
        currentPick = choices[Math.floor(Math.random() * choices.length)];  // Choose a new random letter
        postgLeft();    // Display new Guesses Left value
        postuGuess();   // Show cleared Guessed Letters
        postWins();     // Display new Wins value
    } else if (gLeft === 0) {
        losses++        // Increment losses by 1
        gLeft = 12;     // Reset Guesses Left to 12
        uGuess = [];    // Reset Letters Guessed
        currentPick = choices[Math.floor(Math.random() * choices.length)];  // Choose a new random letter
        postLoss();     // Display new Losses value
        postgLeft();    // Display new Guesses Left value
        postuGuess();   // Show cleared Guessed Letters
    
    }
};
/*
console.log(wins, losses, gLeft, uGuess, keyPick, currentPick);
*/



