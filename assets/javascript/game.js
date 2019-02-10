//*************VARIABLES*************/
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

var theLetter
var guessesRemaining = 8;
var winCounter = 0;
var lossCounter = 0;
var userInput;
var lettersGuessed = [];

//*****SCREEN UPDATING FUNCTIONS******* */
function printGuesses() {
    document.getElementById("guessesLeft").innerHTML = "Guesses Remaining: " + guessesRemaining.toString();
}

function printWin() {
    document.getElementById("wins").innerHTML = "Wins: " + winCounter.toString();
}

function printLoss() {
    document.getElementById("loss").innerHTML = "Losses: " + lossCounter.toString();
}

function printLetters() {
    document.getElementById("lettersChosen").innerHTML = "Letters Guessed: " + lettersGuessed;
}

//************BACK END FUNCTIONS************** */
function newLetter() {
    theLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(theLetter);
}

function theGuess() {
    if (userInput == theLetter) {
        winCounter++;
        lettersGuessed.length = 0;
        guessesRemaining = 8;
        newLetter();
        printWin()
        printLetters()
        printGuesses()

    } 

    else if (lettersGuessed.includes(userInput) == true){
        console.log("That letter has already been guessed.")
    }

    else {
        guessesRemaining--;
        printGuesses()
        printLetters() 
        }
    

    if (guessesRemaining == 0) {
        lossCounter++;
        lettersGuessed.length = 0;
        guessesRemaining = 8;
        newLetter();
        printLoss()
        printGuesses()
        printLetters()
    }
}

function setup() {
    newLetter()
    printWin()
    printGuesses()
    printLetters()
    printLoss()
}

//*******GAME PROCESS****************************//
setup()

document.onkeyup = function (event) {
    userInput = event.key.toLowerCase();
    lettersGuessed.push(userInput);
    console.log(userInput)
    console.log(lettersGuessed);
    theGuess();

}

