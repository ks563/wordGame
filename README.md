# wordGame

on key event to begin game

display word as _ _ _ _ _
    from word index (array of words)
    generate random pick from this array
    reveal word as guesses are made

function to track number of guesses remaining
    set maxTries
    if guess greater than 0 continue game
    if less than zero end game

loop to track and display letters previously guessed
    .getElementIdBy
    .append

var Wins - tracks wins ++
var Losses tracks losses ++

game play

word is selected
 player guesses letter
 letter is registered in attempted guesses
 if letter is in the selected word it pushes to wordAttempt
 remaining guesses is decreased by one
 loops though as player guesses again
 