var wordSelection = ["sablet", "canele", "eclair", "financier", "dacquoise", "spritz", "macaron", "mendiant", "souffle", "beignet"];
var wordIndex = 0;
var maxTries = 8; // how many guesses the player has to guess the word
var guessedLetters = []; // the letters the player has guessed
var wordAttempt = []; // where the guessed word will be built
var remainingGuesses = 0; //how many guesses remain - will use an iterater
var playerGuess = "";
var wordArray = [];
var wins = 0;
var gameStarted = false;
var gameFinished = false;


function updateDisplay() {
    $("#current-word").text(wordSelection);
    $("#remaining-guesses").text(remainingGuesses);
    $("#letters-guessed").text(guessedLetters);
    $("#current-word").text(wordAttempt);

};

function resetGame() {

    //sets remaining guesses to max tries to give player max amount of tries
    remainingGuesses = maxTries;
    //game has not been started
    gameStarted = false;

    //selects new word from wordSelection
    // wordIndex = Math.floor(Math.random() * (wordSelection.length));
    
    console.log(wordIndex);

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

function checkLetter(){
    wordArray =  wordSelection[0];
    wordArray.split("");
    for (var i =0; i < wordArray.length; i++){

    if (playerGuess === wordArray[i])
        wordArray.splice(i, 1, playerGuess); 
        
    }
};

resetGame();
 // initalizes game if there are remaining guesses and starts the game
function startGame(event) {
    if (remainingGuesses > 0);
    if (!gameStarted){
        gameStarted = true;
    };

};

document.onkeypress = function (event) {
        playerGuess = event.key;
        startGame();
        checkLetter();
        // pushes player guess to guessedLetters array
        // guessedLetters.push(playerGuess);
    };

