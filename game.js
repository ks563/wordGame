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
var wins = 0;
var gameStarted = false;
var gameFinished = false;


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
        wordAttempt.push("_");
    };
    // console.log(resetGame);
    updateDisplay();
};

// figure out when to call .onpageload/.ondocumentload 
function setUpGame(); {
    currentWord = wordSelection[wordIndex];
    wordArray = currentWord.toString().split("");
    updateWordAttempt();
    displayGuesses();
};

function updateDisplay(playerGuess) {
    if (remainingGuesses === 0) {
        resetGame();
        checkMatchedLetter(playerGuess);
        checkIncorrectLetter(playerGuess);
    };
};

function checkMatchedLetter(playerGuess) {
    for (var j = 0; j < wordArray.length; j++) {

        if (playerGuess === wordArray[j] && matchedLetters.indexOf(playerGuess) === -1) {
            wordArray.splice(j, 1, playerGuess);
            matchedLetters.push(playerGuess);
        };
    };
};

function checkIncorrectLetter(playerGuess) {
    if (wordArray.indexOf(playerGuess) === -1 && guessedLetters.indexOf(playerGuess) === -1) {
        guessedLetters.push(playerGuess);
        remainingGuesses--;
    };
};

function updateWordAttempt() {
    var wordDisplay = "";
    for (var j = 0; j < wordArray.length; j++){
        if (matchedLetters.indexOf(wordArray[j]) !== -1){
            wordDisplay += wordArray[j];
        }
        else {
            wordDisplay += "&nbsp;_&nbsp;";
        };
    };
    $("#current-word").text(wordDisplay);
};

function displayGuesses() {
    $("#remaining-guesses").text(remainingGuesses);
    $("#letters-guessed").text(guessedLetters.join(", "));
};


resetGame();
// initalizes game if there are remaining guesses and starts the game

function startGame(event) {

    if (!gameStarted) {
        gameStarted = true;
    };

};

document.onkeypress = function (event) {
    playerGuess = String.fromCharCode(event.which).toLowerCase();
    updateDisplay(playerGuess);
};
