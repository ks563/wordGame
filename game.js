var wordSelection = ["sablet", "canele", "eclair", "financier", "dacquoise", "spritz", "macaron", "mendiant", "souffle", "beignet"];
var wordIndex = 0;
var maxTries = 12; // how many guesses the player has to guess the word
var guessedLetter; // the letters the player has guessed
var wordAttempt = []; // where the guessed word will be built
var remainingGuesses = 0; //how many guesses remain - will use an iterater
var playerGuess = "";
var wordArray;
// var guessedLettersOutput;
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
        reloadGame();
    
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

    //sets _ for each letter in new selected word, won't separate _'s with a space
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
    // pushes letters to wordAttempt as they are guessed
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
    // displays guesses in html - this works now that there's not an if statement in the function that calls this function
    $("#remaining-guesses").text(remainingGuesses);
    var guessedLettersOutput = guessedLetters.join(", ");
    console.log(guessedLettersOutput);
    $("#letters-guessed").text(guessedLettersOutput);  
    
}
function startGame(event) {
    // sets gameStarted to true
    if (!gameStarted) {
        gameStarted = true;
    }
}

function reloadGame() {
    // if there are no more guesses or the word is guessed correct - alert that you hav ewon the game and reload the page
    // it doesn't display the last letter before alerting
    if(wordAttempt == currentWord){
        alert("Grab yourself a cookie, you won!");
        location.reload();
    }
    else{
        if(remainingGuesses === 0){
            alert("You lost! No cookie for you!");
            location.reload();
        }
    }
}