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

// sets up game and displays guesses starts game
function setUpGame() {
    resetGame();
    currentWord = wordSelection[wordIndex];
    wordArray = currentWord.toString().split("");
    updateWordAttempt();
    displayGuesses();
    startGame();
}

//checks guessed letters, displays guesses updates attempted word
// was not running before because i had an if statement so this would only run if remainingGuesses === 0 
function updateDisplay(userGuess) {
        checkMatchedLetter(playerGuess);
        checkIncorrectLetter(playerGuess);
        displayGuesses();
        updateWordAttempt();
    
}

function resetGame() {
    //sets remaining guesses to max tries to give player max amount of tries
    remainingGuesses = maxTries;
    //game has not been started
    gameStarted = false;
    //selects new word from wordSelection
    wordIndex = Math.floor(Math.random() * (wordSelection.length));

    //empties arrays and previous guesses attempts
    guessedLetters = [];
    wordAttempt = [];

    //sets _ for each letter in new selected word
    for (var i = 0; i < wordSelection[wordIndex].length; i++) {
        wordAttempt.push(" ", "_");
    }
    // console.log(resetGame);
}

function checkMatchedLetter(userGuess) {
    for (var j = 0; j < wordArray.length; j++) {
        // if the keyed letter is in the word array and is not in matched letters it will push to matched letters
        if (playerGuess === wordArray[j] && matchedLetters.indexOf(playerGuess) === -1) {
            wordArray.splice(j, 1, playerGuess);
            matchedLetters.push(playerGuess);
            //console.log(matchedLetters);
        }
    }
}

function checkIncorrectLetter(userGuess) {
    // if the keyed letter is not in the word array and is not in matched letters it will push to guessedLetters and declimate remaining guesses
    if (wordArray.indexOf(playerGuess) === -1 && guessedLetters.indexOf(playerGuess) === -1) {
        guessedLetters.push(playerGuess);
        remainingGuesses--;
    }
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

function displayGuesses() {
    $("#remaining-guesses").text(remainingGuesses);
    var guessedLettersOutput = guessedLetters.join(", ")
    $("#letters-guessed").text(guessedLettersOutput);  
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