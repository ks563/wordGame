var wordSelection = ["sablet", "canele", "eclair", "financier", "dacquoise", "spritz", "macaron", "mendiant", "souffle", "beignet"];
var wordIndex;
var maxTries = 8; // how many guesses the player has to guess the word
var guessedLetters = []; // the letters the player has guessed
var wordAttempt = []; // where the guessed word will be built
var remainingGuesses = 0; //how many guesses remain - will use an iterater
var wins = 0;
var gameStarted = false;
var gameFinished = false;

function resetGame() {

    //sets remaining guesses to max tries to give player max amount of tries
    remainingGuesses = maxTries;
    //game has not been started
    gameStarted = false;

    //selects new word from wordSelection
    wordIndex = math.floor(math.random() * (wordSelection.length));
    
    console.log(wordIndex);

    //empties arrays and previous guesses attempts
    gussedLetters = [];
    wordAttempt = [];

    //sets _ for each letter in new selected word
    for (var i = 0; i < wordSelection[wordIndex].length; i++) {
        wordAttempt.push("_");
    }

    updateDisplay();
};

function updateDisplay() {
    $("#current-word").text(wordSelection);
    $("#remaining-guesses").text(remainingGuesses);
    $("#letters-guessed").text(guessedLetters);
    $("#current-word").text(wordAttempt);

}

document.onkeyup = function () {



};
