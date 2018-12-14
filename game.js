var wordSelection = ["sablet", "canele", "eclair", "financier", "dacquoise", "spritz", "macaron", "mendiant", "souffle", "beignet"];
var wordIndex = 0;
var maxTries = 12; // how many guesses the player has to guess the word
var guessedLetters = []; // the letters the player has guessed
var wordAttempt = []; // where the guessed word will be built
var remainingGuesses = 0; //how many guesses remain - will use an iterater
var playerGuess = "";
var wordArray;
var currentWord = null;
var matchedLetters = [];
var gameStarted = false;
var gameFinished = false;


$(document).ready(setUpGame);

document.onkeyup = function (event) {
    playerGuess = String.fromCharCode(event.which).toLowerCase();
    updateDisplay(playerGuess);
}

// figure out when to call .onpageload/.ondocumentload 
function setUpGame() {
    resetGame();
    currentWord = wordSelection[wordIndex];
    wordArray = currentWord.toString().split("");
    updateWordAttempt();
    displayGuesses();
    startGame();
}

function updateDisplay(playerGuess) {
    if (remainingGuesses === 0) {
        checkMatchedLetter(playerGuess);
        checkIncorrectLetter(playerGuess);
        displayGuesses();
        updateWordAttempt();
    }
}

function resetGame() {
    //sets remaining guesses to max tries to give player max amount of tries
    remainingGuesses = maxTries;
    //game has not been started
    gameStarted = false;

    //selects new word from wordSelection
    wordIndex = Math.floor(Math.random() * (wordSelection.length));

    // console.log(wordIndex);

    //empties arrays and previous guesses attempts
    guessedLetters = [];
    wordAttempt = [];

    //sets _ for each letter in new selected word
    for (var i = 0; i < wordSelection[wordIndex].length; i++) {
        wordAttempt.push(" ", "_");
    }
    // console.log(resetGame);
}

function updateWordAttempt() {
    var wordDisplay = "";
    for (var j = 0; j < wordArray.length; j++) {
        if (matchedLetters.indexOf(wordArray[j]) !== -1) {
            wordDisplay += wordArray[j];
        }
        else {
            wordDisplay += (" ", "_");
        }
        wordAttempt= wordDisplay;
    }
    $("#current-word").text(wordAttempt);
}

function checkMatchedLetter(playerGuess) {
    for (var j = 0; j < wordArray.length; j++) {

        if (playerGuess === wordArray[j] && matchedLetters.indexOf(playerGuess) === -1) {
            wordArray.splice(j, 1, playerGuess);
            matchedLetters.push(playerGuess);
        }
    }
}

function checkIncorrectLetter(playerGuess) {
    if (wordArray.indexOf(playerGuess) === -1 && guessedLetters.indexOf(playerGuess) === -1) {
        guessedLetters.push(playerGuess);
        remainingGuesses--;
    }
}

function displayGuesses() {
    $("#remaining-guesses").text(remainingGuesses);
    var guessedLettersOutput = guessedLetters.join(", ")
    $("#letters-guessed").append(guessedLettersOutput);  
    console.log(guessedLettersOutput);
}
function startGame(event) {
    if (!gameStarted) {
        gameStarted = true;
    }
}

function endGame() {
    if(remainingGuesses === 0 && wordAttempt == wordArray){
        alert("You have won!");
    }
}