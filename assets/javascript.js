// Word related variables
var unknownWord = "";
var secretWord = "efficient";
var secretWordArray = Array();
var guessedLettersArray = Array();
// ~~~~~~~~~~~~~~~~~~~~~~~~~~ OH GOD THERE IS AN ISSUE WITH CAPITALIZED LETTERS.
var entireArray = ["pikachu", "rattatta", "squirtle", "charmander", "mew"];
var currentArray = entireArray;
var otherArray = ["test", "two"];
var pokemonNumber = 0;

// var onWindow is used to figure out which commands should be valid
    // onwWindow = "guessing" allows the keypresses to function
    // onWIndow = "main" allows the main menu to function
    // onWindow = "choosing" allows the user to select which library of words to use
var onWindow = "guessing";
var isGuessingEnabled = false;

// Sound variables
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ Need to make it so that when mutepage is true, mutesfx is false/etc. Currently set up in the function call.
var muteBGM = true;
var muteSFX = false;

var missedSound = new Audio("assets/sounds/attempt.mp3");
var successSound = new Audio("assets/sounds/Poke_Caught.wav");
var completeSound = new Audio("assets/sounds/DexSound8.wav");
var bGM = new Audio("assets/sounds/107 - battle (vs wild pokemon).mp3");

function play(sound) {
    console.log("sound", sound)
    console.log("missedSound", [missedSound])
    // Need to do the sound.src and match them together;
    if (muteSFX === false) {

        sound.play();
    }
    // if (muteBGM === false) {
    //     sound.play()
    // }
}

//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Took the words from someone else on how to build mute/unmute.
// https://stackoverflow.com/questions/14044761/how-to-mute-all-sound-in-a-page-with-js
                                            // // Mute a singular HTML5 element
                                            // function muteMe(elem) {
                                            //     elem.muted = true;
                                            //     elem.pause();
                                            // }

                                            // // Try to mute all video and audio elements on the page
                                            // function mutePage() {
                                            //     var elems = document.querySelectorAll("video, audio");

                                            //     [].forEach.call(elems, function(elem) { muteMe(elem); });
                                            // }

// Game mechanic variables
// wanted to create concept of multiple lives (before game is over)
var lives = 3;
// guesses for pokemon
var guesses = 10;

// Setting how blurred the image is for catching the pokemon.
// Easy = see the sprite
// Medium = silhouette, grayscale
// Hard = blurred silhouette
// Master = nothing shown of image (blank)
var difficulty = "medium";
// ~~~~~~~~~~~~~~~~~~~~~~ need to create a list of caught pokemon. If you quit without catching the pokemon, you move the pokemon back into the list and then randomize.



// ~~~~~~~~~~~~~~~~~~~~~~~~ using keypress to change the class of all the things
// ~~~~~~~~~~~~~~~~~~~~~~~~ can also remove on multiple elements even if it doesn't work. Need to do this when updating class of the used letters.
// document.getElementById(secretWord).classList.add("teststyle")
// document.getElementById(secretWord).classList.remove("teststyle")
// document.getElementById(secretWord).classList.remove("teststyle")

function newGame() {
    // console.log("This tests that the newGame button works");
    // Hides the you win!
    document.getElementById("win").classList.add("hidden");
    // Set the first value in entireArray as the secret word
    pokemonNumber = Math.floor(Math.random() * currentArray.length);
    secretWord = currentArray[pokemonNumber];
    arrayify(secretWord);
    // Tests shifting the array as this will be possible with the different word lists; looks to work correctly.
    // currentArray = otherArray;
    // Enables guessing
    isGuessingEnabled = false;
    console.log("isguessing in newgame" + isGuessingEnabled);

};

function arrayify(secretWord) {
    // Clear guessedLettersArray
    guessedLettersArray = Array();
    document.getElementById("guessedLettersArray").innerHTML = guessedLettersArray;
    // Core function of arrayify that creates an array from the secret word
    // Also creates the unknown word at the same time (for a single for loop)
    secretWordArray = [secretWord[0]];
    unknownWord = "-";
    for (i=1; i < secretWord.length; i++) {
        // ~~~~~~~~~~~~~~~~~ THIS SHOULDN'T REMOVE A THIS POINT. ONLY REMOVE WHEN THE POKEMON IS CAUGHT
        secretWordArray.push(secretWord[i]);
        unknownWord = "-" + unknownWord;
        // console.log(secretWordArray);
    };
    document.getElementById("unknownWord").innerHTML = unknownWord;
    console.log(secretWordArray);
    console.log(unknownWord);
    console.log("isguessing in arrafify" + isGuessingEnabled);
}

arrayify(secretWord)

// Doing a keypress.
document.onkeydown = function(keypress) {
    // Enables the guessing logic if isGuessingEnabled=True. Otherwise, can't guess!
    if(isGuessingEnabled = true) {
        console.log("isGuessing " + isGuessingEnabled)
        if(keypress.which <= 90 && keypress.which >= 65) {
            // console.log(keypress.key + " was pressed")
            // checks if the letter is new or was already pressed in the round
            if(guessedLettersArray.indexOf(keypress.key) === -1) {
                // Checks for if the key is in the array
                if(secretWordArray.indexOf(keypress.key) === -1) {
                    // console.log("This character was not found!")
                    play(missedSound)
                }
                else{
                    // console.log("This character was found!");
                    // replace the dash with a letter
                    for (letter = 0; letter<unknownWord.length; letter++) {
                        // console.log(letter)
                        // console.log(secretWord[letter]===keypress.key)
                        if(secretWord[letter]===keypress.key) {
                            // console.log(unknownWord[letter] + " " + keypress.key)
                            // replace doesn't actually replace the string UNLESS it is re-set as the variable. Nothing happens unkown the unknownWord = is at the front
                            unknownWord = unknownWord.substring(0, letter) + keypress.key + unknownWord.substring(letter+1)
                            // console.log(unknownWord)
                        }
                    }
                    // Update the value of the unknownWord on the document screen
                    document.getElementById("unknownWord").innerHTML = unknownWord;
                    if(unknownWord.indexOf("-") === -1) {
                        document.getElementById("win").innerHTML = "You win!";
                        document.getElementById("win").classList.remove("hidden");
                        play(successSound);
                        // Sets guessing to false so no characters can be checked/read.
                        isGuessingEnabled = false;
                        console.log("Isguessing " + isGuessingEnabled)
                        // Remove the pokemon from the array if it exists once caught. 
                        if(currentArray.indexOf(secretWord) > -1) {
                            currentArray.splice(pokemonNumber, 1);
                        };
                        // Checks whether all of the pokemon in the set was caught.
                        //  ~~~~~~~ Should disable the new game button from being pressed 
                        if(currentArray.length === 0) {
                            play(completeSound);
                            document.getElementById("win").innerHTML = "You caught all the pokemon! Congratulations, trainer!";
                        }
                        // ~~~~~~~~~~~~~~~~ Show button that says play again?
                        // If that button is pressed, call the newGame function
                        // ~~~~~~~~~~~~~~~~ When you win, disable guessing. Probably have a disableGuessing variable
                    }
                }
                // After checking for the letter, the guessedLettersArray is appended
                // Checks if array is blank
                if(guessedLettersArray.length === 0) {
                    guessedLettersArray = Array(keypress.key);
                }
                // adds new values if the array is not blank
                else {
                    guessedLettersArray.push(keypress.key)
                }
                // ~~~~~~ currently displays all the guessedLetters in an array. Not necessary later iff
                // ~~~~~~~~~~~~~~~~~~ The classes of the displayed letters on the screen should be changed.
                document.getElementById("guessedLettersArray").innerHTML = guessedLettersArray;
                console.log(guessedLettersArray)
            }
            else {
                console.log("This character was already pressed!")
            }
        }
    }
}



// Core of game elements:::
// if onWindow is true, clicking enter, n, or the button leads to the next page

// if on 





// Game Start
function gameStart() {
// Test of setup of the core elements of the game
document.getElementById("unknownWord").innerHTML = unknownWord;
// Should be testing that the
}

// document.getElementById("unknownWord").innerHTML = unknownWord;

gameStart()