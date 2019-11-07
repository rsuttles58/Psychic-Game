//*************VARIABLES*************/
var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var theLetter;
var guessesRemaining = 8;
var winCounter = 0;
var lossCounter = 0;
var lettersGuessed = [];

//*****DOM UPDATING FUNCTIONS********/
function printGuesses() {
  document.getElementById("guessesLeft").innerHTML =
    "Guesses Remaining: " + guessesRemaining.toString();
}

function printWin() {
  document.getElementById("wins").innerHTML = "Wins: " + winCounter.toString();
}

function printLoss() {
  document.getElementById("loss").innerHTML =
    "Losses: " + lossCounter.toString();
}

function printLetters() {
  document.getElementById("lettersChosen").innerHTML =
    "Letters Guessed: " + lettersGuessed;
}

//************BACK END FUNCTIONS************** */
//newLetter will select a random letter from the array of letters.  Letter will be logged to the console.
function newLetter() {
  theLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(`Current letter: ${theLetter}`);
}

//Processes the user's input (guess)
function theGuess(userInput) {
  //if the user guessed correctly....
  if (userInput === theLetter) {
    winCounter++;
    lettersGuessed.length = 0;
    guessesRemaining = 8;
    newLetter();
    printWin();
    printLetters();
    printGuesses();
    winCheck();
    //if the user guessed incorrectly and that letter has not already been guessed....
  } else if (lettersGuessed.includes(userInput) === false) {
    console.log(`User entered ${userInput}`);
    lettersGuessed.push(userInput);
    guessesRemaining--;
    printGuesses();
    printLetters();
  }
  gameCheck();
}

function winCheck() {
  var laugh = new Audio((src = "assets/audio/evilvillain.wav"));

  if (winCounter === 1) {
    laugh.play();
  } else if (winCounter === 3) {
    alert("You are the champion!");
  }
}

//Checks if the user is out of guesses for the letter.  If they are, then it resets the game and adds a loss.
function gameCheck() {
  if (guessesRemaining === 0) {
    lossCounter++;
    lettersGuessed.length = 0;
    guessesRemaining = 8;
    newLetter();
    printLoss();
    printGuesses();
    printLetters();
  }
}
//declare the setup function that invokes the processes that reset the game state.
function setup() {
  newLetter();
  printWin();
  printGuesses();
  printLetters();
  printLoss();
}

//*******GAME PROCESS****************************//
//Invoke the setup function to start the game.
setup();

//event listener that listens for a key to be released.
document.onkeyup = function(event) {
  var userInput = event.key.toLowerCase();
  theGuess(userInput);
};
